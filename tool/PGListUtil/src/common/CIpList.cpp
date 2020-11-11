#include <stdio.h>
#include <string.h>
#include "CIpList.h"

namespace pglu {
namespace ip {

namespace {

inline void Ip_Swap(CIp **ipA, CIp **ipB) {
	CIp *ip = *ipA;
	*ipA = *ipB;
	*ipB = ip;
}

void Ip_SortByIpQuick(CIp **ipBegin, CIp **ipEnd) {
	CIp **ipA;
	CIp **ipB;
	int nGap = ipEnd - ipBegin;

	if(nGap < 64)
		return;

	ipA = ipBegin + ((int)(nGap / 2));
	if((*ipBegin)->ip64 > (*ipA)->ip64)
		Ip_Swap(ipBegin, ipA);
	if((*ipBegin)->ip64 > (*ipEnd)->ip64)
		Ip_Swap(ipBegin, ipEnd);
	if((*ipA)->ip64 > (*ipEnd)->ip64)
		Ip_Swap(ipA, ipEnd);
	ulong ip64 = (*ipA)->ip64;

	ipB = ipEnd - 1;
	Ip_Swap(ipA, ipB);
	ipA = ipBegin;

	for(; ; ) {
		while((*(++ipA))->ip64 < ip64);
		while((*(--ipB))->ip64 > ip64);
 		if(ipA > ipB)
			break;
		Ip_Swap(ipA, ipB);
	}
	Ip_Swap(ipA, ipEnd - 1);

	Ip_SortByIpQuick(ipBegin, ipB);
	Ip_SortByIpQuick(ipA + 1, ipEnd);
}

void Ip_SortByIpInsert(CIp **ipBegin, CIp **ipEnd) {
	CIp **ipA = ipBegin + 1;
	CIp **ipB;
	CIp **ipAEnd = ipEnd + 1;
	CIp **ipBEnd = ipBegin - 1;
	ulong ip64;
	for(; ipA != ipAEnd; ++ipA) {
		ip64 = (*ipA)->ip64;
		for(ipB = ipA - 1; ipB != ipBEnd && (*ipB)->ip64 > ip64; --ipB)
			Ip_Swap(ipB, ipB + 1);
	}
}

void Ip_SortByIp(CIp **ipBegin, CIp **ipEnd) {
	Ip_SortByIpQuick(ipBegin, ipEnd);
	Ip_SortByIpInsert(ipBegin, ipEnd);
}

CIp * Ip_SortByCaption(CIp *ipHeadA) {
	if(!ipHeadA || !(ipHeadA->next))
		return ipHeadA;

	// split ipBを2倍で進めることでipAを中間位置に持っていく
	CIp *ipA = ipHeadA;
	CIp *ipB = ipHeadA->next->next;
	while(ipB) {
		ipA = ipA->next;
		ipB = ipB->next;
		if(ipB)
			ipB = ipB->next;
	}
	CIp *ipHeadB = ipA->next;
	ipA->next = NULL;

	ipHeadA = Ip_SortByCaption(ipHeadA);
	ipHeadB = Ip_SortByCaption(ipHeadB);

	// merge
	CIp ipMerged;
	ipA = &ipMerged;
	while(ipHeadA || ipHeadB) {
		if(((ipHeadA && ipHeadB) && stricmp(ipHeadA->caption, ipHeadB->caption) <= 0) || !ipHeadB) {
			ipA->next = ipHeadA;
			ipHeadA = ipHeadA->next;
		} else {
			ipA->next = ipHeadB;
			ipHeadB = ipHeadB->next;
		}
		ipA = ipA->next;
	}
	ipA->next = NULL;

	return ipMerged.next;
}

} // namespace

//--------------------------------------
// CIpList class
//--------------------------------------

CIpList::CIpList() :
	m_poolIp(sizeof(CIp)),
	m_ipFoot(&m_ipHead),
	m_count(0),
	m_countDisabled(0)
{
	m_ipHead.caption = NULL;
	m_ipHead.ip64 = 0L;
	m_ipHead.next = NULL;
}

CIpList::~CIpList() {
	Clear();
}

void CIpList::Clear() {
	for(CIp *ip = m_ipHead.next; ip; ip = ip->next)
		delete[] ip->caption;
	m_poolIp.purge_memory();
	m_ipHead.next = NULL;
	m_ipFoot = &m_ipHead;
	m_count = 0;
	m_countDisabled = 0;
	UnSetFilter();
}

void CIpList::SetFilter(const char *filter, const filter::EFilterMode mode, const bool del) {
	m_filter.Assign(filter, mode, del);
}

void CIpList::UnSetFilter() {
	m_filter.Clear();
}

CIp * CIpList::CreateIp(boost::xpressive::cmatch & match) {
	CIp *ip = (CIp*)m_poolIp.malloc();

	const char *capBegin = match.prefix().first;
	const char *capEnd = match[9].first;
	size_t lenCap = capEnd - capBegin;
	char *chunk = new char[lenCap + 1];
	memcpy(chunk, capBegin, lenCap);
	*(chunk + lenCap) = '\0';
	ip->caption = chunk;

	uchar *ip8 = ip->ip8;
	ip8[4] = ParseDigit3(match[4].first, match[4].second);
	ip8[5] = ParseDigit3(match[3].first, match[3].second);
	ip8[6] = ParseDigit3(match[2].first, match[2].second);
	ip8[7] = ParseDigit3(match[1].first, match[1].second);

	if(*(match[10].first) == '-') {
		ip8[0] = ParseDigit3(match[8].first, match[8].second);
		ip8[1] = ParseDigit3(match[7].first, match[7].second);
		ip8[2] = ParseDigit3(match[6].first, match[6].second);
		ip8[3] = ParseDigit3(match[5].first, match[5].second);
	} else {
		ip->ip32[0] = ip->ip32[1] | (0xFFFFFFFF >> ParseDigit3(match[11].first, match[11].second));
	}

	return ip;
}

bool CIpList::LoadListFile(const char *path) {
	char buf[PGLU_LENGTH_FILELINE];
	char colon;
	char *colon_p;

	using namespace boost::xpressive;

	static cmatch match;
	static mark_tag tagIp1(1), tagIp2(2), tagIp3(3), tagIp4(4), tagIp5(5), tagIp6(6), tagIp7(7), tagIp8(8);
	static mark_tag tagColon(9), tagSep(10), tagMask(11);

	static cregex reSyntax = // bos >> (tag = *_) >> // slower
		(tagColon = as_xpr(':')) >> *_s >>
		(tagIp1 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp2 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp3 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp4 = repeat<1, 3>(_d)) >>
		*_s >> (tagSep = as_xpr('-')) >> *_s >>
		(tagIp5 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp6 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp7 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp8 = repeat<1, 3>(_d)) >>
		*_s >> (_ln | eos);

	static cregex reSyntaxRestorable =
		(tagColon = !as_xpr(':')) >> *_s >>
		(tagIp1 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
		(tagIp2 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
		(tagIp3 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
		(tagIp4 = repeat<1, 3>(_d)) >> *_s >> (
			(tagSep = +as_xpr('-')) >> *_s >>
			(tagIp5 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
			(tagIp6 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
			(tagIp7 = repeat<1, 3>(_d)) >> (set = '.', ',') >>
			(tagIp8 = repeat<1, 3>(_d))
		|
			(tagSep = +(set = '/', '\\')) >> *_s >>
			(tagMask = repeat<1, 2>(_d))
		) >> *_s >> (_ln | eos);

	FILE *fp = fopen(path, "r");
	if(fp == NULL)
		return false;

	CIp *ip = m_ipFoot;

	if(m_filter.IsEmpty()) {
		while(fgets(buf, PGLU_LENGTH_FILELINE, fp)) {

			if(regex_search(buf, match, reSyntax) || regex_search(buf, match, reSyntaxRestorable)) {
				++m_count;
				ip->next = CreateIp(match);
				ip = ip->next;
			}
#ifdef __MINGW32__
			ZeroString(buf);
#endif
		}
	} else {
		while(fgets(buf, PGLU_LENGTH_FILELINE, fp)) {

			if(regex_search(buf, match, reSyntax) || regex_search(buf, match, reSyntaxRestorable)) {
				colon_p = (char*)(match[9].first);
				colon = *colon_p;
				*colon_p = '\0';

				if(m_filter.IsMatch(buf)) {
					++m_count;
					ip->next = CreateIp(match);
					ip = ip->next;
				}
				*colon_p = colon;
			}
#ifdef __MINGW32__
			ZeroString(buf);
#endif
		}
	}
	fclose(fp);
	ip->next = NULL;
	m_ipFoot = ip;
	return true;
}

bool CIpList::SaveListFile(const char *path, const bool append) {
	uchar *ip8;

	FILE *fp = fopen(path, (append ? "a" : "w"));
	if(fp == NULL)
		return false;

	for(CIp *ip = m_ipHead.next; ip; ip = ip->next) {
		// IPが0Lなら書き出さない
		if(ip->ip64 != 0L) {
			ip8 = ip->ip8;
			fprintf(fp,
				"%s:%u.%u.%u.%u-%u.%u.%u.%u\n",
				ip->caption,
				ip8[7], ip8[6], ip8[5], ip8[4],
				ip8[3], ip8[2], ip8[1], ip8[0]
			);
		}
	}
	fclose(fp);
	return true;
}

void CIpList::CheckAndSort(const bool sortCap, const bool sortIp, const bool delDupIp) {
	CIp **ipBegin;
	CIp **ipEnd;
	CIp *ip;

	if(m_count < 2)
		return;

	if(sortIp || delDupIp) {
		// リストから配列を複製
		CIp **ipSort = new CIp*[m_count];
		ipBegin = ipSort;
		for(ip = m_ipHead.next; ip; ip = ip->next)
			*(ipBegin++) = ip;

		// 配列をソート
		Ip_SortByIp(ipSort, ipSort + m_count - 1);

		if(delDupIp) {
			// すでにIPが0Lなものを無効としてカウント
			ipBegin = ipSort;
			ipEnd = ipBegin + m_count;

			for(; ipBegin != ipEnd && (*ipBegin)->ip64 == 0L; ++ipBegin)
				++m_countDisabled;
			if(ipBegin == ipEnd)
				goto END_SORT; // 全てのIPが0L

			// 重複したIPは0Lにして無効としてカウント
			for(--ipEnd; ipBegin != ipEnd; ++ipBegin)
				if((*ipBegin)->ip64 == (*(ipBegin + 1))->ip64) {
					(*ipBegin)->ip64 = 0L;
					++m_countDisabled;
				}
		}
		if(sortIp) {
			// 配列の中身を連結
			ipBegin = ipSort;
			ipEnd = ipSort + m_count;
			ip = &m_ipHead;
			while(ipBegin != ipEnd) {
				ip->next = *(ipBegin++);
				ip = ip->next;
			}
			ip->next = NULL;
		}
	END_SORT:
		delete[] ipSort;
	}

	if(sortCap)
		m_ipHead.next = Ip_SortByCaption(m_ipHead.next);

	if(sortIp || sortCap) {
		// m_ipFootを再設定
		ip = m_ipHead.next;
		if(ip) {
			for(; ip->next; ip = ip->next);
			m_ipFoot = ip;
		} else {
			m_ipFoot = &m_ipHead;
		}
	}
}

int CIpList::Count() {
	return m_count;
}

int CIpList::CountDisabled() {
	return m_countDisabled;
}

} // namespace ip
} // namespace pglu
