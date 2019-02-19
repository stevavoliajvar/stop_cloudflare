if (document.body) {
	if (!['searxes.danwin1210.me', 'searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion'].includes(location.hostname)) {
		let cs = (function () {
			let s = document.createElement('style');
			document.head.appendChild(s);
			return s.sheet;
		})();
		if (cs) {
			cs.insertRule("a[data-mitm]{text-decoration-line:line-through !important;text-decoration-color:red !important;text-decoration-style:double !important}", 0);
		}
		let asked = [location.hostname, 'searxes.danwin1210.me'];
		document.querySelectorAll("a[href^='http://']:not([data-mitm]),a[href^='https://']:not([data-mitm]),a[href^='//']:not([data-mitm])").forEach(a => {
			let aF = (new URL(a.href)).hostname;
			if (!/^(.*)\.(onion|i2p|invalid|test|local|localhost|([0-9]{1,3}))$/.test(aF) && !asked.includes(aF)) {
				asked.push(aF);
				browser.runtime.sendMessage(aF);
			}
		});
		browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (request.length == 2) {
				if (request[1]) {
					document.querySelectorAll("a[href^='http://" + request[0] + "/']:not([data-mitm]),a[href^='https://" + request[0] + "/']:not([data-mitm]),a[href^='//" + request[0] + "/']:not([data-mitm])").forEach(a => {
						a.dataset.mitm = 1;
						a.title = 'MITM!';
					});
				}
			}
			sendResponse(null);
		});
	}
}