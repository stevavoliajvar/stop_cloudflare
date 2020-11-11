#ifndef COMMON_H
#define COMMON_H

#ifdef _MSC_VER

typedef unsigned __int8 uchar;
typedef unsigned __int32 uint;
typedef unsigned __int64 ulong;

# else

#include <boost/cstdint.hpp>

typedef uint8_t uchar;
typedef uint32_t uint;
typedef uint64_t ulong;

#endif

namespace pglu {

#define PGLU_LENGTH_FILELINE 1024

inline uint ParseDigit3(const char *begin, const char *end) {
	switch(end - begin) {
	case 3:
		return ((*begin & 0xF) * 100) + ((*(begin + 1) & 0xF) * 10) + (*(begin + 2) & 0xF);
	case 2:
		return ((*begin & 0xF) * 10) + (*(begin + 1) & 0xF);
	case 1:
		return (*begin & 0xF);
	default:
		return 256;
	}
}

#ifdef __MINGW32__

inline void ZeroString(char *str) {
	while(*str != '\0')
		*(str++) = '\0';
}

#endif

} // namespace pglu

#endif // COMMON_H
