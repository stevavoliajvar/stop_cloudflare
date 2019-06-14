if (document.body && !['searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org'].includes(location.hostname)) {
	let cs = (function () {
		let s = document.createElement('style');
		document.head.appendChild(s);
		return s.sheet;
	})();
	if (cs) {
		cs.insertRule("a[data-mitm]{cursor:not-allowed !important;text-decoration-line:line-through !important;text-decoration-color:red !important;text-decoration-style:double !important}", 0);
		cs.insertRule("a[data-mitm]::before{content:'[\\26A0]';font-weight:bold !important;color:red !important;display:inline-block !important}", 1);
		cs.insertRule("a[data-mitm]:hover::before{content:'[\\26A1]'}", 2);
		cs.insertRule("a[data-mitm]:hover{color:red !important}", 3);
	}
	let asked = ['searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org', 'addons.mozilla.org', 'web.archive.org'];
	document.querySelectorAll("a[href^='http://']:not([data-mitm]),a[href^='https://']:not([data-mitm]),a[href^='//']:not([data-mitm])").forEach(a => {
		let aF = (new URL(a.href)).hostname;
		if (!/^(.*)\.(danwin1210\.me|onion|i2p|invalid|test|local|localhost|([0-9]{1,3})|bbs|chan|cyb|dyn|geek|gopher|indy|libre|neo|null|o|oss|oz|parody|pirate|bit|lib|coin|emc|bazar|fur)$/.test(aF) && !asked.includes(aF)) {
			asked.push(aF);
			browser.runtime.sendMessage(aF);
		}
	});
	browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.length == 2) {
			if (request[1]) {
				document.querySelectorAll("a[href^='http://" + request[0] + "/']:not([data-mitm]),a[href^='https://" + request[0] + "/']:not([data-mitm]),a[href^='//" + request[0] + "/']:not([data-mitm])").forEach(a => {
					a.dataset.mitm = 1;
					a.title = 'DANGER! DANGER! MITM!';
				});
			}
		}
		sendResponse(null);
	});
}