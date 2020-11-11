#include "WindowMain.h"
#include "resource.h"
#include "../common/CErrorList.h"
#include "../common/CIpList.h"

namespace ThreadExecute {

namespace {

TCHAR	g_tsTemp[STRLEN_TEMP];
TCHAR	g_tsPath[STRLEN_PATH];

TCHAR	g_tsFailedFileRead[STRLEN_RESULT];
TCHAR	g_tsFailedFileWrite[STRLEN_RESULT];
TCHAR	g_tsOutputComplete[STRLEN_RESULT];
TCHAR	g_tsCheckComplete[STRLEN_RESULT];
TCHAR	g_tsFoundError[STRLEN_RESULT];
TCHAR	g_tsNotFoundError[STRLEN_RESULT];
TCHAR	g_tsErrorSyntax[STRLEN_RESULT];
TCHAR	g_tsErrorIp[STRLEN_RESULT];
TCHAR	g_tsErrorSyntaxRestorable[STRLEN_RESULT];

CHAR *GetMBSfromWS(WCHAR *ws) {
	int i = WideCharToMultiByte(CP_THREAD_ACP, 0, ws, -1, NULL, 0, NULL, NULL) + 1;
	if(0 < i) {
		CHAR *mbs = new CHAR[i];
		if(!WideCharToMultiByte(CP_THREAD_ACP, 0, ws, -1, mbs, i, NULL, NULL)) {
			delete[] mbs;
			mbs = NULL;
		}
		return mbs;
	} else {
		return NULL;
	}
}

char *ReleaseMBS(char *mbs) {
	if(mbs) {
		delete[] mbs;
		mbs = NULL;
	}
	return mbs;
}

bool ExecCheckInfile(HWND hDlg) {
	char *mbsPath;
	int incomp = 0;
	pglu::error::CErrorList errlist;

	WindowMain::Edit_Result_SetText(hDlg, NULL);
	int iInfileCount = WindowMain::ListView_Infile_GetItemCount(hDlg);
	for(int iCountInfile = 0; iCountInfile < iInfileCount; ++iCountInfile) {
		WindowMain::ListView_Infile_GetItemText(hDlg, iCountInfile, g_tsPath);
		WindowMain::Edit_Result_AppendText(hDlg, g_tsPath);
		mbsPath = GetMBSfromWS(g_tsPath);
		if(mbsPath && errlist.LoadListFile(mbsPath)) {
			int iErrCount = errlist.Count();
			if(0 < iErrCount) {
				WindowMain::Edit_Result_AppendText(hDlg, g_tsFoundError);
				lstrcpy(g_tsTemp, TEXT("\r\n"));
				for(pglu::error::CError * err = errlist.GetNext(); err; err = errlist.GetNext()) {
					switch(err->kind) {
					case pglu::error::SYNTAX:
						wsprintf(g_tsTemp + 2, g_tsErrorSyntax, err->line);
						++incomp;
						break;
					case pglu::error::IP:
						wsprintf(g_tsTemp + 2, g_tsErrorIp, err->line);
						++incomp;
						break;
					case pglu::error::SYNTAX_RESTORABLE:
						wsprintf(g_tsTemp + 2, g_tsErrorSyntaxRestorable, err->line);
						break;
					}
					WindowMain::Edit_Result_AppendText(hDlg, g_tsTemp);
				}
			} else {
				WindowMain::Edit_Result_AppendText(hDlg, g_tsNotFoundError);
			}
			mbsPath = ReleaseMBS(mbsPath);
		} else {
			WindowMain::Edit_Result_AppendText(hDlg, g_tsFailedFileRead);
			++incomp;
		}
		WindowMain::Edit_Result_AppendText(hDlg, TEXT("\r\n\r\n"));
		errlist.Clear();
	}
	return (incomp == 0);
}

bool ExecOutput(HWND hDlg) {
	bool succ = false;
	char *mbsPath;
	WindowMain::COption option;
	pglu::ip::CIpList iplist;

	// 設定取得
	WindowMain::GetOption(hDlg, &option);

	// フィルタ設定
	WindowMain::Edit_Filter_GetText(hDlg, g_tsTemp);
	if(0 < lstrlen(g_tsTemp)) {
		char *mbsFilter = GetMBSfromWS(g_tsTemp);
		if(mbsFilter) {
			pglu::filter::EFilterMode filtMode = (option.filtAnd ? pglu::filter::AND : pglu::filter::OR);
			iplist.SetFilter(mbsFilter, filtMode, option.filtDel);
			mbsFilter = ReleaseMBS(mbsFilter);
		}
	}

	// 読み込み
	int iInfileCount = WindowMain::ListView_Infile_GetItemCount(hDlg);
	for(int iCountInfile = 0; iCountInfile < iInfileCount; ++iCountInfile) {
		WindowMain::ListView_Infile_GetItemText(hDlg, iCountInfile, g_tsPath);
		mbsPath = GetMBSfromWS(g_tsPath);
		if(mbsPath) {
			succ = iplist.LoadListFile(mbsPath);
			mbsPath = ReleaseMBS(mbsPath);
			if(!succ) {
				// 読み込み失敗
				WindowMain::Edit_Result_SetText(hDlg, g_tsPath);
				WindowMain::Edit_Result_SetText(hDlg, g_tsFailedFileRead);
				return false;
			}
		}
	}

	// チェック　ソート
	iplist.CheckAndSort(option.sortCap, option.sortIp, option.delDupIp);

	// 書き出し
	WindowMain::Edit_Outfile_GetText(hDlg, g_tsPath);
	mbsPath = GetMBSfromWS(g_tsPath);
	if(mbsPath) {
		succ = iplist.SaveListFile(mbsPath, option.saveAppend);
		mbsPath = ReleaseMBS(mbsPath);
		if(!succ) {
			// 書き込み失敗
			WindowMain::Edit_Result_SetText(hDlg, g_tsPath);
			WindowMain::Edit_Result_SetText(hDlg, g_tsFailedFileWrite);
			return false;
		}
	}

	// 実行結果
	int iIpCount = iplist.Count();
	int iIpCountDisabled = iplist.CountDisabled();
	wsprintf(g_tsTemp, g_tsOutputComplete, iIpCount, iIpCountDisabled, iIpCount - iIpCountDisabled);
	WindowMain::Edit_Result_SetText(hDlg, g_tsTemp);

	return true;
}

} // namespace

BOOL Init(HINSTANCE hInstance) {
	LoadString(hInstance, IDS_FAILED_FILE_READ, g_tsFailedFileRead, STRLEN_RESULT);
	LoadString(hInstance, IDS_FAILED_FILE_WRITE, g_tsFailedFileWrite, STRLEN_RESULT);
	LoadString(hInstance, IDS_OUTPUT_COMPLETE, g_tsOutputComplete, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_COMPLETE, g_tsCheckComplete, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_FOUND_ERROR, g_tsFoundError, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_NOTFOUND_ERROR, g_tsNotFoundError, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_ERROR_SYNTAX, g_tsErrorSyntax, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_ERROR_IP, g_tsErrorIp, STRLEN_RESULT);
	LoadString(hInstance, IDS_CHECK_ERROR_SYNTAX_RESTORABLE, g_tsErrorSyntaxRestorable, STRLEN_RESULT);
	return TRUE;
}

DWORD WINAPI ThreadExecCheckInfile(LPVOID lpParam) {
	HWND hDlg = (HWND)lpParam;
	ExecCheckInfile(hDlg);
	WindowMain::Dlg_Executing(hDlg, FALSE);
	ExitThread(TRUE);
}

DWORD WINAPI ThreadExecOutput(LPVOID lpParam) {
	HWND hDlg = (HWND)lpParam;
	ExecOutput(hDlg);
	WindowMain::Dlg_Executing(hDlg, FALSE);
	ExitThread(TRUE);
}

DWORD WINAPI ThreadExecCheckAndOutput(LPVOID lpParam) {
	HWND hDlg = (HWND)lpParam;
	if(ExecCheckInfile(hDlg))
		ExecOutput(hDlg);
	WindowMain::Dlg_Executing(hDlg, FALSE);
	ExitThread(TRUE);
}

} // namespace ThreadExecute
