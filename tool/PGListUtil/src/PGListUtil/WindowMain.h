#ifndef WINDOWMAIN_H
#define WINDOWMAIN_H

#include <windows.h>

#define STRLEN_TEMP 1024
#define STRLEN_PATH 1024
#define STRLEN_EXPFILT 128
#define STRLEN_RESULT 64

namespace WindowMain {

struct COption {
	bool	sortCap;
	bool	sortIp;
	bool	delDupIp;
	bool	saveAppend;
	bool	filtAnd;
	bool	filtDel;
};

BOOL Init(HINSTANCE hInstance);

BOOL CALLBACK DlgProcMain(HWND hWnd, UINT msg, WPARAM wp, LPARAM lp);

void Dlg_Executing(HWND hDlg, BOOL bExec);
int ListView_Infile_GetItemCount(HWND hDlg);
BOOL ListView_Infile_GetItemText(HWND hDlg, int nItem, LPTSTR tsPath);
BOOL Edit_Outfile_GetText(HWND hDlg, LPTSTR tsPath);
BOOL Edit_Filter_GetText(HWND hDlg, LPTSTR tsText);

BOOL GetOption(HWND hDlg, COption *option);

void Edit_Result_SetText(HWND hDlg, LPCTSTR tsText);
void Edit_Result_AppendText(HWND hDlg, LPCTSTR tsText);

}

#endif // WINDOWMAIN_H
