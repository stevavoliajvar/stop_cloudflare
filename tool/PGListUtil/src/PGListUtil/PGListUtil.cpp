#include <windows.h>
#include "WindowMain.h"
#include "resource.h"

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nShowCmd) {
	WindowMain::Init(hInstance);
	DialogBox(hInstance, (LPTSTR)IDD_MAIN, NULL, (DLGPROC)(WindowMain::DlgProcMain));
	return 0;
}
