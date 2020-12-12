if (document.body && !['sercxi.eu.org', 'api.sercxi.eu.org', 'ansero.eu.org'].includes(location.hostname) && !location.hostname.endsWith('.onion')) {
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
	browser.storage.local.get(['ign1', 'ign2', 'obs', 'dbg', 'alt']).then(g => {
		let asked = ['', 'sercxi.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion', 'sercxi.eu.org', 'api.sercxi.eu.org', 'ansero.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion', 'ansero.eu.org', 'addons.mozilla.org', 'addons.thunderbird.net', 'web.archive.org', 't.co'];
		if (g.ign1 == 'y') {
			asked.push(location.hostname);
		}
		let qstall = (g.ign2 == 'y') ? 'a[href]:not([data-mitm])' : 'a[href]:not([data-mitm]),img[src]:not([data-mitm])';
		let running = false;
		function scanme() {
			if (!running) {
				running = true;
				let unknown = [];
				document.querySelectorAll(qstall).forEach(a => {
					let aF = (a.tagName == 'A' ? (new URL(a.href)).hostname : (new URL(a.src)).hostname) || '';
					a.dataset.mitm = aF;
					if (!asked.includes(aF)) {
						asked.push(aF);
						if (!/^(.*)\.(wikipedia\.org|onion|i2p|invalid|test|local|localhost|([0-9]{1,3})|bbs|chan|cyb|dyn|geek|gopher|indy|libre|neo|null|o|oss|oz|parody|pirate|bit|lib|coin|emc|bazar|fur)$/.test(aF) && aF.length >= 4) {
							unknown.push(aF);
						}
					}
				});
				if (unknown.length > 0) {
					browser.runtime.sendMessage(unknown);
				}
				running = false;
			}
		}
		browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (request.length == 2) {
				if (g.dbg == 'y') {
					console.log('isMITM:', request[0], request[1]);
				}
				document.querySelectorAll(g.ign2 == 'y' ? "a[href][data-mitm='" + request[0] + "']" : "a[href][data-mitm='" + request[0] + "'],img[src][data-mitm='" + request[0] + "']").forEach(a => {
					if (request[1]) {
						a.dataset.mitm = 'y';
						if (g.alt == 'y' && a.tagName == 'A') {
							if (!a.href.startsWith('https://web.archive.org/web/')) {
								a.href = 'https://web.archive.org/web/' + a.href;
							}
							a.title = 'Arkivo!';
						} else {
							a.title = 'MITM!';
						}
					} else {
						a.dataset.mitm = 'n';
					}
				});
			}
			sendResponse(true);
			return;
		});
		scanme();
		if (g.obs == 'y') {
			(new MutationObserver(scanme)).observe(document, {
				attributes: true,
				attributeFilter: ['href'],
				childList: true,
				subtree: true
			});
		}
	});
}