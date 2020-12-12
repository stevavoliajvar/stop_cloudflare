let history = {};
browser.webRequest.onResponseStarted.addListener(i => {
	if ([403, 406, 410, 429, 451, 462].includes(i.statusCode)) {
		let iFQDN = (new URL(i.url)).hostname;
		if (['sercxi.eu.org', 'ansero.eu.org', 'sercxi.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion', 'ansero.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion'].includes(iFQDN)) {
			return;
		}
		let iServer = '?';
		i.responseHeaders.forEach(x => {
			if (x.name.toLowerCase() == 'server') {
				iServer = x.value;
			}
		});
		history[iFQDN] = [i.url, iServer, i.statusCode, (new Date()).toUTCString()];
	}
	return;
}, {
	urls: ['http://*/*', 'https://*/*'],
	types: ['main_frame']
}, ['responseHeaders']);
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request && sender) {
		if (request == 'get') {
			sendResponse(history);
		}
		if (request == 'clear') {
			history = {};
			sendResponse(true);
		}
	}
});
browser.browserAction.onClicked.addListener(() => {
	browser.runtime.openOptionsPage();
});