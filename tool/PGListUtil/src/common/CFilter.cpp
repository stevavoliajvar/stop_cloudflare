#include <ctype.h>
#include <string.h>
#include "CFilter.h"

namespace pglu {
namespace filter {

namespace {

char *strichr(const char *str, int chr) {
	const char *p = str;
	chr = tolower((unsigned char)chr);
	for(; tolower((unsigned char)(*p)) != chr; ++p)
		if(*p == '\0')
			return NULL;
	return (char*)p;
}

char *stristr(const char *str, const char *pattern) {
	if(*pattern == '\0')
		return (char*)str;

	const char *p = str;
	size_t len = strlen(pattern);
	for(; (p = strichr(p, pattern[0])) != NULL; ++p)
		if(!strnicmp(p, pattern, len))
			return (char*)p;
	return NULL;
}

bool search_and(const char *str, const char *terms, const bool del) {
	do {
		if(!stristr(str, terms))
			return del; // not found
		while(*terms != '\0')
			++terms;
		++terms;
	} while(*terms != '\0');
	return !del; // found all
}

bool search_or(const char *str, const char *terms, const bool del) {
	do {
		if(stristr(str, terms))
			return !del; // found
		while(*terms != '\0')
			++terms;
		++terms;
	} while(*terms != '\0');
	return del; // not found
}

} // namespace

//--------------------------------------
// CFilter class
//--------------------------------------

CFilter::CFilter() :
	m_terms(NULL)
{
}

CFilter::CFilter(const char *strFilter, const EFilterMode mode, const bool del) :
	m_terms(NULL)
{
	Assign(strFilter, mode, del);
}

CFilter::~CFilter() {
	Clear();
}

void CFilter::Assign(const char *strFilter, const EFilterMode mode, const bool del) {
	Clear();

	if(mode == AND)
		m_search = search_and;
	else if(mode == OR)
		m_search = search_or;
	else
		return;

	m_mode = mode;
	m_del = del;

	m_terms = new char[strlen(strFilter) + 2];

	while(*strFilter == ' ' || *strFilter == '\t')
		++strFilter;

	char *strTerms = m_terms;
	while(*strFilter != '\0') {
		*(strTerms++) = *(strFilter++);
		if(*strFilter == ' ' || *strFilter == '\t') {
			*(strTerms++) = '\0';
			do {
				++strFilter;
			} while(*strFilter == ' ' || *strFilter == '\t');
		}
	}
	*strTerms = '\0';
	*(strTerms + 1) = '\0';
}

void CFilter::Clear() {
	if(m_terms) {
		delete[] m_terms;
		m_terms = NULL;
	}
}

bool CFilter::IsEmpty() {
	if(m_terms)
		return *m_terms == '\0';
	else
		return true;
}

bool CFilter::IsMatch(const char *str) {
	return m_search(str, m_terms, m_del);
}

} // namespace filter
} // namespace pglu
