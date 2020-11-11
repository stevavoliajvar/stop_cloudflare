#ifndef THREADEXECUTE_H
#define THREADEXECUTE_H

#include <windows.h>

namespace ThreadExecute {

BOOL Init(HINSTANCE hInstance);

DWORD WINAPI ThreadExecCheckInfile(LPVOID);
DWORD WINAPI ThreadExecOutput(LPVOID);
DWORD WINAPI ThreadExecCheckAndOutput(LPVOID);

}

#endif // THREADEXECUTE_H
