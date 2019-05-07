let history = {};

browser.webRequest.onResponseStarted.addListener(i => {
	if (i.statusCode == 403) {
		let iFQDN = (new URL(i.url)).hostname;
		let iServer = 'Unknown';
		i.responseHeaders.forEach(x => {
			if (x.name == 'Server') {
				iServer = x.value;
			}
		});
		let iDate = (new Date()).toUTCString();
		history[iFQDN] = [i.url, iServer, iDate];
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