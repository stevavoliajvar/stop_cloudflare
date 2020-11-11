#ifndef CERRLIST_H
#define CERRLIST_H

#include <boost/pool/pool.hpp>
#include "common.h"

namespace pglu {
namespace error {

typedef enum _EErrKind {
	SYNTAX,
	IP,
	SYNTAX_RESTORABLE
} EErrKind;

typedef struct _CError {
	int			line;
	EErrKind	kind;
	_CError *	next;
} CError;

class CErrorList {
private:
	boost::pool<>	m_pool;
	CError			m_errHead;
	CError *		m_errFoot;
	CError *		m_errNext;
	int				m_count;

public:
	CErrorList();
	~CErrorList();

	void Clear();
	bool LoadListFile(const char *path);
	int Count();
	CError * GetNext();
};

} // namespace error
} // namespace pglu

#endif // CERRLIST_H
