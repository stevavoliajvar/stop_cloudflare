#ifndef CIPLIST_H
#define CIPLIST_H

#include <boost/pool/pool.hpp>
#include <boost/xpressive/xpressive.hpp>
#include "common.h"
#include "CFilter.h"

namespace pglu {
namespace ip {

struct CIp {
	char *		caption;
	union {
		ulong	ip64;
		uint	ip32[2];
		uchar	ip8[8];
	};
	CIp *		next;
};

class CIpList {
private:
	boost::pool<>	m_poolIp;
	CIp				m_ipHead;
	CIp *			m_ipFoot;

	filter::CFilter	m_filter;

	int				m_count;
	int				m_countDisabled;

	CIp * CreateIp(boost::xpressive::cmatch & match);

public:
	CIpList();
	~CIpList();

	void Clear();

	void SetFilter(const char *filter, const filter::EFilterMode mode, const bool del);
	void UnSetFilter();

	bool LoadListFile(const char *path);
	bool SaveListFile(const char *path, const bool append);

	void CheckAndSort(const bool sortCap, const bool sortIp, const bool delDupIp);

	int Count();
	int CountDisabled();
};

} // namespace ip
} // namespace pglu

#endif // CIPLIST_H
