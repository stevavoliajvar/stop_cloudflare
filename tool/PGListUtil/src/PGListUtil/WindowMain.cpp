#include "stdafx.h"
#include "WindowMain.h"
#include "resource.h"
#include "ThreadExecute.h"

#define WM_USER_EXECUTING WM_USER

namespace WindowMain {

namespace {

TCHAR			g_tsTempA[STRLEN_TEMP];
TCHAR			g_tsTempB[STRLEN_TEMP];

HINSTANCE		g_hInst;

OPENFILENAME	g_ofn = { 0 };
TCHAR			g_tsExpFilt[STRLEN_EXPFILT];
TCHAR			g_tsPath[STRLEN_PATH];

MENUITEMINFO	g_mii = { 0 };

TCHAR			g_tsSetInfile[STRLEN_RESULT];
TCHAR			g_tsSetOutfile[STRLEN_RESULT];
TCHAR			g_tsExecuting[STRLEN_RESULT];

WNDPROC WndProcListInfileDef;
WNDPROC WndProcEditOutfileDef;

//--------------------------------------
// Function
//--------------------------------------

void Menu_SwapIfChecked(HMENU hMenuMain, int nItemSrc, int nItemCmp) {
	GetMenuItemInfo(hMenuMain, nItemCmp, FALSE, &g_mii);
	if(g_mii.fState & MFS_CHECKED) {
		g_mii.fState = MFS_CHECKED;
		SetMenuItemInfo(hMenuMain, nItemSrc, FALSE, &g_mii);
		g_mii.fState = MFS_UNCHECKED;
		SetMenuItemInfo(hMenuMain, nItemCmp, FALSE, &g_mii);
	}
}

void ListView_Infile_AddItem(HWND hListInfile, LPTSTR tsPath, LPTSTR tsFile) {
	LVITEM lvItem = { 0 };
	lvItem.mask = LVIF_TEXT;

	lvItem.iSubItem = 0;
	lvItem.pszText = tsPath;
	lvItem.iItem = ListView_InsertItem(hListInfile, &lvItem);

	lvItem.iSubItem = 1;
	lvItem.pszText = tsFile;
	ListView_SetItem(hListInfile, &lvItem);
}

void ListView_Infile_AddItem(HWND hListInfile, LPTSTR tsPath) {
	LPTSTR tsFile = tsPath;
	for(LPTSTR tsP = tsFile; *tsP != TEXT('\0'); ++tsP)
		if(*tsP == TEXT('\\'))
			tsFile = tsP;
	ListView_Infile_AddItem(hListInfile, tsPath, tsFile + 1);
}

void ListView_Infile_DelSelItem(HWND hListInfile) {
	int i = -1;
	int j = -1;

	while((i = ListView_GetNextItem(hListInfile, i, LVNI_SELECTED)) != -1) {
		j = i;
		ListView_DeleteItem(hListInfile, i--);
	}
	if(j != -1) {
		if(0 < (i = ListView_GetItemCount(hListInfile))) {
			if(j < i) {
				ListView_SetItemState(hListInfile, j, LVIS_SELECTED, LVIS_SELECTED);
			} else {
				ListView_SetItemState(hListInfile, i - 1, LVIS_SELECTED, LVIS_SELECTED);
			}
		}
	}
}

void ListView_Infile_DelDup(HWND hListInfile) {
	int i = ListView_GetItemCount(hListInfile);
	if(1 < i) {
		for(--i; 0 < i; --i) {
			ListView_GetItemText(hListInfile, i, 0, g_tsTempA, STRLEN_TEMP);
			ListView_GetItemText(hListInfile, i - 1, 0, g_tsTempB, STRLEN_TEMP);
			if(lstrcmpi(g_tsTempA, g_tsTempB) == 0)
				ListView_DeleteItem(hListInfile, i);
		}
	}
}

BOOL IsEmptyInfile(HWND hListInfile, HWND hEditResult) {
	if(ListView_GetItemCount(hListInfile) < 1) {
		SetWindowText(hEditResult, g_tsSetInfile);
		return TRUE;
	}
	return FALSE;
}

BOOL IsEmptyOutfile(HWND hEditOutfile, HWND hEditResult) {
	if(GetWindowTextLength(hEditOutfile) < 1) {
		SetWindowText(hEditResult, g_tsSetOutfile);
		return TRUE;
	}
	return FALSE;
}

//--------------------------------------
// Sub Window Procedure
//--------------------------------------

LRESULT WndProcListInfileSub(HWND hWnd, UINT msg, WPARAM wp, LPARAM lp) {
	int i, j;

	switch(msg) {

	case WM_KEYDOWN: {
		if(wp == VK_DELETE)
			ListView_Infile_DelSelItem(hWnd);
	} break;

	case WM_DROPFILES: {
		j = DragQueryFile((HDROP)wp, -1, NULL, 0);
		for(i = 0; i < j; ++i) {
			DragQueryFile((HDROP)wp, i, g_tsTempA, STRLEN_TEMP);
			ListView_Infile_AddItem(hWnd, g_tsTempA);
		}
		ListView_Infile_DelDup(hWnd);
	} break;

	default:
		return CallWindowProc(WndProcListInfileDef, hWnd, msg, wp, lp);
	}
	return 0;
}

LRESULT WndProcEditOutfileSub(HWND hWnd, UINT msg, WPARAM wp, LPARAM lp) {
	switch(msg) {

	case WM_DROPFILES: {
		DragQueryFile((HDROP)wp, 0, g_tsTempA, STRLEN_TEMP);
		SetWindowText(hWnd, g_tsTempA);
	} break;

	default:
		return CallWindowProc(WndProcEditOutfileDef, hWnd, msg, wp, lp);
	}
	return 0;
}

} // namespace

//--------------------------------------
// WindowMain
//--------------------------------------

BOOL Init(HINSTANCE hInstance) {
	InitCommonControls();

	g_hInst = hInstance;

	// 文字列読み込み
	LoadString(hInstance, IDS_SET_INFILE, g_tsSetInfile, STRLEN_RESULT);
	LoadString(hInstance, IDS_SET_OUTFILE, g_tsSetOutfile, STRLEN_RESULT);
	LoadString(hInstance, IDS_EXECUTING, g_tsExecuting, STRLEN_RESULT);
	LoadString(hInstance, IDS_EXPFILT_PGLIST, g_tsExpFilt, STRLEN_EXPFILT);
	// g_tsExpFiltは@をnull文字に変換
	for(TCHAR *p = g_tsExpFilt; *p != TEXT('\0'); ++p)
		if(*p == TEXT('@'))
			*p = TEXT('\0');

	// MENUITEMINFO設定
	g_mii.cbSize = sizeof(g_mii);
	g_mii.fMask = MIIM_STATE;

	// OPENFILENAME設定
	g_ofn.lStructSize = sizeof(g_ofn);
	g_ofn.lpstrFilter = g_tsExpFilt;
	g_ofn.nFilterIndex = 0;
	g_ofn.lpstrFile = g_tsPath;
	g_ofn.nMaxFile = STRLEN_PATH;

	// 実行スレッド初期化
	ThreadExecute::Init(hInstance);
	return TRUE;
}

void Dlg_Executing(HWND hDlg, BOOL bExec) {
	SendMessage(hDlg, WM_USER_EXECUTING, (WPARAM)bExec, 0);
}

int ListView_Infile_GetItemCount(HWND hDlg) {
	return ListView_GetItemCount(GetDlgItem(hDlg, IDC_LISTVIEW_INFILE));
}

BOOL ListView_Infile_GetItemText(HWND hDlg, int nItem, LPTSTR tsPath) {
	ListView_GetItemText(GetDlgItem(hDlg, IDC_LISTVIEW_INFILE), nItem, 0, tsPath, STRLEN_PATH);
	return TRUE;
}

BOOL Edit_Outfile_GetText(HWND hDlg, LPTSTR tsPath) {
	return GetDlgItemText(hDlg, IDC_EDIT_OUTFILE, tsPath, STRLEN_PATH);
}

BOOL Edit_Filter_GetText(HWND hDlg, LPTSTR tsText) {
	return GetDlgItemText(hDlg, IDC_EDIT_FILTER, tsText, STRLEN_PATH);
}

void Edit_Result_SetText(HWND hDlg, LPCTSTR tsText) {
	SetDlgItemText(hDlg, IDC_EDIT_RESULT, tsText);
}

BOOL GetOption(HWND hDlg, COption *option) {
	HMENU hMenuMain = GetMenu(hDlg);

	GetMenuItemInfo(hMenuMain, IDM_SORT_CAPTION, FALSE, &g_mii);
	option->sortCap = ((g_mii.fState & MFS_CHECKED) != 0);

	GetMenuItemInfo(hMenuMain, IDM_SORT_IP, FALSE, &g_mii);
	option->sortIp = ((g_mii.fState & MFS_CHECKED) != 0);

	GetMenuItemInfo(hMenuMain, IDM_CHECK_DUP_IP, FALSE, &g_mii);
	option->delDupIp = ((g_mii.fState & MFS_CHECKED) != 0);

	GetMenuItemInfo(hMenuMain, IDM_SAVE_APPEND, FALSE, &g_mii);
	option->saveAppend = ((g_mii.fState & MFS_CHECKED) != 0);

	option->filtAnd = (SendDlgItemMessage(hDlg, IDC_RADIO_FILTER_AND, BM_GETCHECK, 0, 0) == BST_CHECKED);
	option->filtDel = (SendDlgItemMessage(hDlg, IDC_CHECK_FILTER_DEL, BM_GETCHECK, 0, 0) == BST_CHECKED);

	return TRUE;
}

void Edit_Result_AppendText(HWND hDlg, LPCTSTR tsText) {
	HWND hEditResult = GetDlgItem(hDlg, IDC_EDIT_RESULT);
	int len = GetWindowTextLength(hEditResult);
	SendMessage(hEditResult, EM_SETSEL, (WPARAM)len, (LPARAM)len);
	SendMessage(hEditResult, EM_REPLACESEL, 0, (LPARAM)tsText);
}

BOOL CALLBACK DlgProcMain(HWND hWnd, UINT msg, WPARAM wp, LPARAM lp) {
	static HMENU	hMenuMain;
	static HWND		hListInfile;
	static HWND		hEditOutfile;
	static HWND		hEditFilter;
	static HWND		hEditResult;
	static DWORD	dwThreadId;

	int i, j;

	switch(msg) {

	case WM_CLOSE: {
		EndDialog(hWnd, 0);
	} break;

	case WM_INITDIALOG: {
		HDC hDC;
		RECT rect;
		LVCOLUMN lvCol;

		// 各ハンドル格納
		hMenuMain = GetMenu(hWnd);
		hListInfile = GetDlgItem(hWnd, IDC_LISTVIEW_INFILE);
		hEditOutfile = GetDlgItem(hWnd, IDC_EDIT_OUTFILE);
		hEditFilter = GetDlgItem(hWnd, IDC_EDIT_FILTER);
		hEditResult = GetDlgItem(hWnd, IDC_EDIT_RESULT);

		// ウィンドウ位置設定
		hDC = GetDC(hWnd);
		GetWindowRect(hWnd, &rect);
		SetWindowPos(hWnd, HWND_TOP,
			(GetDeviceCaps(hDC, HORZRES) - (rect.right - rect.left)) / 2,
			(GetDeviceCaps(hDC, VERTRES) - (rect.bottom - rect.top)) / 2,
			0, 0, SWP_NOSIZE);
		ReleaseDC(hWnd, hDC);

		// リストビュー設定
		ListView_SetExtendedListViewStyle(hListInfile,
			LVS_EX_FULLROWSELECT | LVS_EX_GRIDLINES | LVS_EX_LABELTIP);//LVS_EX_INFOTIP);

		int nWidthScroll = GetSystemMetrics(SM_CXVSCROLL);
		int nWidth3DEdge = GetSystemMetrics(SM_CXEDGE);
		GetWindowRect(hListInfile, &rect);

		lvCol.mask = LVCF_FMT | LVCF_TEXT | LVCF_WIDTH | LVCF_SUBITEM;
		lvCol.fmt = LVCFMT_LEFT;

		lvCol.cx = 72;
		lvCol.iSubItem = 0;
		LoadString(g_hInst, IDS_FILE_PATH, g_tsTempA, STRLEN_TEMP);
		lvCol.pszText = g_tsTempA;
		ListView_InsertColumn(hListInfile, 0, &lvCol);

		lvCol.cx = (rect.right - rect.left) - 72 - nWidthScroll - nWidth3DEdge * 2;
		lvCol.iSubItem = 1;
		LoadString(g_hInst, IDS_FILE_NAME, g_tsTempA, STRLEN_TEMP);
		lvCol.pszText = g_tsTempA;
		ListView_InsertColumn(hListInfile, 1, &lvCol);

		// チェック状態
		SendDlgItemMessage(hWnd, IDC_RADIO_FILTER_AND, BM_SETCHECK, BST_CHECKED, 0);

	#ifdef UNICODE
		// コマンドライン引数からリストへ追加
		LPWSTR *wsCmds = CommandLineToArgvW(GetCommandLineW(), &j);
		for(i = 1; i < j; ++i)
			ListView_Infile_AddItem(hListInfile, wsCmds[i]);
		LocalFree((HLOCAL)wsCmds);
		ListView_Infile_DelDup(hListInfile);
	#endif

		// サブクラス
		WndProcListInfileDef = (WNDPROC)GetWindowLong(hListInfile, GWL_WNDPROC);
		SetWindowLong(hListInfile, GWL_WNDPROC, (LONG)WndProcListInfileSub);

		WndProcEditOutfileDef = (WNDPROC)GetWindowLong(hEditOutfile, GWL_WNDPROC);
		SetWindowLong(hEditOutfile, GWL_WNDPROC, (LONG)WndProcEditOutfileSub);
	} break;

	case WM_COMMAND: {
		switch(LOWORD(wp)) {

		case IDM_EXIT: {
			EndDialog(hWnd, IDOK);
			//PostMessage(hWnd, WM_CLOSE, 0, 0);
		} break;

		case IDM_SORT_CAPTION:
		case IDM_SORT_IP:
		case IDM_CHECK_DUP_IP: {
			GetMenuItemInfo(hMenuMain, LOWORD(wp), FALSE, &g_mii);
			g_mii.fState = ((g_mii.fState & MFS_CHECKED) ? MFS_UNCHECKED : MFS_CHECKED);
			SetMenuItemInfo(hMenuMain, LOWORD(wp), FALSE, &g_mii);
		} break;

		case IDM_SAVE_REPLACE: {
			Menu_SwapIfChecked(hMenuMain, IDM_SAVE_REPLACE, IDM_SAVE_APPEND);
		} break;

		case IDM_SAVE_APPEND: {
			Menu_SwapIfChecked(hMenuMain, IDM_SAVE_APPEND, IDM_SAVE_REPLACE);
		} break;

		case IDM_CHECK_INFILE: {
			if(IsEmptyInfile(hListInfile, hEditResult))
				break;
			SendMessage(hWnd, WM_USER_EXECUTING, (WPARAM)TRUE, 0);
			CreateThread(NULL, 0, ThreadExecute::ThreadExecCheckInfile, (LPVOID)hWnd, 0, &dwThreadId);
		} break;

		case IDM_OUTPUT: {
			if(IsEmptyInfile(hListInfile, hEditResult) || IsEmptyOutfile(hEditOutfile, hEditResult))
				break;
			SendMessage(hWnd, WM_USER_EXECUTING, (WPARAM)TRUE, 0);
			CreateThread(NULL, 0, ThreadExecute::ThreadExecOutput, (LPVOID)hWnd, 0, &dwThreadId);
		} break;

		case IDM_CHECK_AND_OUTPUT: {
			if(IsEmptyInfile(hListInfile, hEditResult) || IsEmptyOutfile(hEditOutfile, hEditResult))
				break;
			SendMessage(hWnd, WM_USER_EXECUTING, (WPARAM)TRUE, 0);
			CreateThread(NULL, 0, ThreadExecute::ThreadExecCheckAndOutput, (LPVOID)hWnd, 0, &dwThreadId);
		} break;

		case IDC_BUTTON_INFILE_ADD: {
			// C:\a.txt0
			// C:\0a.txt0b.txt00
			// C:\dir0a.txt0b.txt00
			memset(g_tsPath, 0, STRLEN_PATH);
			g_ofn.hwndOwner = hWnd;
			g_ofn.Flags = OFN_EXPLORER | OFN_FILEMUSTEXIST | OFN_ALLOWMULTISELECT | OFN_HIDEREADONLY;
			if(GetOpenFileName(&g_ofn)) {
				if(g_tsPath[g_ofn.nFileOffset - 1] != TEXT('\0'))
					ListView_Infile_AddItem(hListInfile, g_tsPath, g_tsPath + g_ofn.nFileOffset);
				else {
					lstrcpy(g_tsTempA, g_tsPath);
					LPTSTR tsFile = g_tsTempA + g_ofn.nFileOffset - 1;
					if(*(tsFile - 1) != TEXT('\\')) {
						*tsFile = TEXT('\\');
						++tsFile;
					}
					for(LPTSTR tsP = g_tsPath + g_ofn.nFileOffset; *tsP != TEXT('\0'); ++tsP) {
						lstrcpy(tsFile, tsP);
						ListView_Infile_AddItem(hListInfile, g_tsTempA, tsFile);
						while(*tsP != TEXT('\0'))
							++tsP;
					}
				}
				ListView_Infile_DelDup(hListInfile);
			}
		} break;

		case IDC_BUTTON_INFILE_DEL: {
			ListView_Infile_DelSelItem(hListInfile);
		} break;

		case IDC_BUTTON_INFILE_CLEAR: {
			ListView_DeleteAllItems(hListInfile);
		} break;

		case IDC_BUTTON_OUTFILE_REF: {
			memset(g_tsPath, 0, STRLEN_PATH);
			g_ofn.hwndOwner = hWnd;
			g_ofn.Flags = OFN_EXPLORER;
			if(GetSaveFileName(&g_ofn))
				SetWindowText(hEditOutfile, g_tsPath);
		} break;

		case IDC_BUTTON_FILTER_CLEAR: {
			SetWindowText(hEditFilter, NULL);
		} break;

		default:
			return FALSE;
		}
	} break;

	case WM_USER_EXECUTING: {
		if((BOOL)wp) {
			g_mii.fState = MFS_GRAYED;
			SetWindowText(hEditResult, g_tsExecuting);
		} else {
			g_mii.fState = MFS_ENABLED;
		}
		SetMenuItemInfo(hMenuMain, 2, TRUE, &g_mii);
		DrawMenuBar(hWnd);
	} break;

	default:
		return FALSE;
	}
	return TRUE;
}

} // namespace WindowMain
