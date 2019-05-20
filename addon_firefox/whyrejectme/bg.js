let history = {};

browser.webRequest.onResponseStarted.addListener(i => {
	if ([403,406,410,451,462].includes(i.statusCode)) {
		let iFQDN = (new URL(i.url)).hostname;
		if (iFQDN == 'searxes.eu.org'||iFQDN == 'searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion'){return;}
		let iServer = 'Unknown';
		i.responseHeaders.forEach(x => {
			if (x.name == 'Server') {
				iServer = x.value;
			}
		});
		let iDate = (new Date()).toUTCString();
		history[iFQDN] = [i.url, iServer, i.statusCode, iDate];
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