#include <stdio.h>
#include <boost/xpressive/xpressive.hpp>
#include "CErrorList.h"

namespace pglu {
namespace error {

CErrorList::CErrorList() :
	m_pool(sizeof(CError)),
	m_errFoot(&m_errHead),
	m_errNext(&m_errHead),
	m_count(0)
{
	m_errHead.line = 0;
	m_errHead.kind = SYNTAX;
	m_errHead.next = NULL;
}

CErrorList::~CErrorList() {
	Clear();
}

void CErrorList::Clear() {
	m_pool.purge_memory();
	m_errHead.next = NULL;
	m_errFoot = &m_errHead;
	m_errNext = &m_errHead;
	m_count = 0;
}

bool CErrorList::LoadListFile(const char *path) {
	char buf[PGLU_LENGTH_FILELINE];
	uint ip_begin1, ip_begin2, ip_begin3, ip_begin4;
	uint ip_end1, ip_end2, ip_end3, ip_end4;
	FILE *fp;
	CError *err = m_errFoot;

	using namespace boost::xpressive;

	static cmatch match;
	static mark_tag tagIp1(1), tagIp2(2), tagIp3(3), tagIp4(4), tagIp5(5), tagIp6(6), tagIp7(7), tagIp8(8);
	static mark_tag tagSep(9), tagMask(10);

	static cregex reSyntax =
		as_xpr(':') >> *_s >>
		(tagIp1 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp2 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp3 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp4 = repeat<1, 3>(_d)) >>
		*_s >> as_xpr('-') >> *_s >>
		(tagIp5 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp6 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp7 = repeat<1, 3>(_d)) >> as_xpr('.') >>
		(tagIp8 = repeat<1, 3>(_d)) >>
		*_s >> (_ln | eos);

	static cregex reSyntaxRestorable =
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

#define reIpError repeat<3>(+_d >> *_s >> (set = '.', ',') >> *_s) >> +_d

	static cregex reSyntaxError =
		reIpError >> *_s >> (
			*as_xpr('-') >> *_s >> reIpError |
			+(set = '/', '\\') >> *_s >> +_d
		);

	fp = fopen(path, "r");
	if(fp == NULL)
		return false;

	for(int line = 1; fgets(buf, PGLU_LENGTH_FILELINE, fp); ++line) {

		if(regex_search(buf, match, reSyntax)) {
			if(!(
				(ip_begin1 = ParseDigit3(match[1].first, match[1].second)) < 256 &&
				(ip_begin2 = ParseDigit3(match[2].first, match[2].second)) < 256 &&
				(ip_begin3 = ParseDigit3(match[3].first, match[3].second)) < 256 &&
				(ip_begin4 = ParseDigit3(match[4].first, match[4].second)) < 256 &&
				(ip_end1 = ParseDigit3(match[5].first, match[5].second)) < 256 &&
				(ip_end2 = ParseDigit3(match[6].first, match[6].second)) < 256 &&
				(ip_end3 = ParseDigit3(match[7].first, match[7].second)) < 256 &&
				(ip_end4 = ParseDigit3(match[8].first, match[8].second)) < 256 &&
				(uint)((ip_begin1 << 24) | (ip_begin2 << 16) | (ip_begin3 << 8) | ip_begin4) <=
				(uint)((ip_end1 << 24) | (ip_end2 << 16) | (ip_end3 << 8) | ip_end4)
			)) {
				++m_count;
				err->next = (CError*)m_pool.malloc();
				err = err->next;
				err->line = line;
				err->kind = IP;
			}

		} else if(regex_search(buf, match, reSyntaxRestorable)) {
			++m_count;
			err->next = (CError*)m_pool.malloc();
			err = err->next;
			err->line = line;
			if(*(match[9].first) == '-') {
				if(
					(ip_begin1 = ParseDigit3(match[1].first, match[1].second)) < 256 &&
					(ip_begin2 = ParseDigit3(match[2].first, match[2].second)) < 256 &&
					(ip_begin3 = ParseDigit3(match[3].first, match[3].second)) < 256 &&
					(ip_begin4 = ParseDigit3(match[4].first, match[4].second)) < 256 &&
					(ip_end1 = ParseDigit3(match[5].first, match[5].second)) < 256 &&
					(ip_end2 = ParseDigit3(match[6].first, match[6].second)) < 256 &&
					(ip_end3 = ParseDigit3(match[7].first, match[7].second)) < 256 &&
					(ip_end4 = ParseDigit3(match[8].first, match[8].second)) < 256 &&
					(uint)((ip_begin1 << 24) | (ip_begin2 << 16) | (ip_begin3 << 8) | ip_begin4) <=
					(uint)((ip_end1 << 24) | (ip_end2 << 16) | (ip_end3 << 8) | ip_end4)
				) {
					err->kind = SYNTAX_RESTORABLE;
				} else {
					err->kind = SYNTAX;
				}
			} else {
				uint mask = ParseDigit3(match[10].first, match[10].second);
				if(
					ParseDigit3(match[1].first, match[1].second) < 256 &&
					ParseDigit3(match[2].first, match[2].second) < 256 &&
					ParseDigit3(match[3].first, match[3].second) < 256 &&
					ParseDigit3(match[4].first, match[4].second) < 256 &&
					mask < 33
				) {
					err->kind = SYNTAX_RESTORABLE;
				} else {
					err->kind = SYNTAX;
				}
			}
		} else if(regex_search(buf, reSyntaxError)) {
			++m_count;
			err->next = (CError*)m_pool.malloc();
			err = err->next;
			err->line = line;
			err->kind = SYNTAX;
		}
#ifdef __MINGW32__
		ZeroString(buf);
#endif
	}

	fclose(fp);
	err->next = NULL;
	m_errFoot = err;
	return true;
}

int CErrorList::Count() {
	return m_count;
}

CError * CErrorList::GetNext() {
	if(m_errNext)
		m_errNext = m_errNext->next;
	return m_errNext;
}

} // namespace error
} // namespace pglu
