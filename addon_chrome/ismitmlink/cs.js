if (document.body && !['searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org', 'api.searxes.eu.org'].includes(location.hostname)) {
	let cs = (function () {
		let s = document.createElement('style');
		document.head.appendChild(s);
		return s.sheet;
	})();
	if (cs) {
		cs.insertRule("a[data-mitm=y]{cursor:not-allowed !important;text-decoration-line:line-through !important;text-decoration-color:red !important;text-decoration-style:double !important}", 0);
		cs.insertRule("a[data-mitm=y]::before{content:'[\\26A0]';font-weight:bold !important;color:red !important;display:inline-block !important}", 1);
		cs.insertRule("a[data-mitm=y]:hover::before{content:'[\\26A1]'}", 2);
		cs.insertRule("a[data-mitm=y]:hover{color:red !important}", 3);
		cs.insertRule("img[data-mitm=y]{cursor:not-allowed !important;border:2px red dotted !important}", 4);
		cs.insertRule("img[data-mitm=y]:hover{filter:sepia(20%)}", 5);
	}

	let asked = ['', 'searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org', 'api.searxes.eu.org', 'addons.mozilla.org', 'addons.thunderbird.net', 'web.archive.org'];
	document.querySelectorAll('a[href]:not([data-mitm]),img[src]:not([data-mitm])').forEach(a => {
		let aF = (a.tagName == 'A' ? (new URL(a.href)).hostname : (new URL(a.src)).hostname) || '';
		if (!/^(.*)\.(danwin1210\.me|onion|i2p|invalid|test|local|localhost|([0-9]{1,3})|bbs|chan|cyb|dyn|geek|gopher|indy|libre|neo|null|o|oss|oz|parody|pirate|bit|lib|coin|emc|bazar|fur)$/.test(aF) && !asked.includes(aF)) {
			asked.push(aF);
			chrome.runtime.sendMessage(aF);
		}
	});

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.length == 2) {
			document.querySelectorAll('a[href]:not([data-mitm]),img[src]:not([data-mitm])').forEach(a => {
				let aF = (a.tagName == 'A' ? (new URL(a.href)).hostname : (new URL(a.src)).hostname) || '';
				if (aF == request[0]) {
					if (request[1]) {
						a.dataset.mitm = 'y';
						a.title = 'MITM!';
					} else {
						a.dataset.mitm = 'n';
					}
				}
			});
		}
		sendResponse(null);
	});
}