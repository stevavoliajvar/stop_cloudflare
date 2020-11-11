#ifndef CFILTER_H
#define CFILTER_H

namespace pglu {
namespace filter {

typedef enum _EFilterMode {
	AND,
	OR
} EFilterMode;

class CFilter {
private:
	char *		m_terms;
	EFilterMode	m_mode;
	bool		m_del;

	bool (* m_search)(const char *, const char *, const bool);

public:
	CFilter();
	CFilter(const char *strFilter, const EFilterMode mode, const bool del);
	~CFilter();

	void Assign(const char *strFilter, const EFilterMode mode, const bool del);
	void Clear();
	bool IsEmpty();
	bool IsMatch(const char *str);
};

} // namespace filter
} // namespace pglu

#endif // CFILTER_H
