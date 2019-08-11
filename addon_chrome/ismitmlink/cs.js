if (document.body && !['searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org', 'api.searxes.eu.org'].includes(location.hostname)) {
	if (location.protocol === 'chrome-extension:') {
		chrome.storage.local.get(['ign1', 'ign2', 'obs'], (g) => {
			document.getElementById('ign1').checked = (g.ign1 == 'y') ? true : false;
			document.getElementById('ign2').checked = (g.ign2 == 'y') ? true : false;
			document.getElementById('obs').checked = (g.obs == 'y') ? true : false;
		});
		document.getElementById('ign1').addEventListener('click', () => {
			chrome.storage.local.set({
				'ign1': (document.getElementById('ign1').checked ? 'y' : 'n')
			});
		});
		document.getElementById('ign2').addEventListener('click', () => {
			chrome.storage.local.set({
				'ign2': (document.getElementById('ign2').checked ? 'y' : 'n')
			});
		});
		document.getElementById('obs').addEventListener('click', () => {
			chrome.storage.local.set({
				'obs': (document.getElementById('obs').checked ? 'y' : 'n')
			});
		});
	} else {
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
		chrome.storage.local.get(['ign1', 'ign2', 'obs'], (g) => {
			let asked = ['', 'searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion', 'searxes.eu.org', 'api.searxes.eu.org', 'addons.mozilla.org', 'addons.thunderbird.net', 'web.archive.org', 't.co'];
			if (g.ign1 == 'y') {
				asked.push(location.hostname);
			}
			let qstall = (g.ign2 == 'y') ? 'a[href]:not([data-mitm])' : 'a[href]:not([data-mitm]),img[src]:not([data-mitm])';
			function scanme() {
				if (location.hostname == 'twitter.com') {
					document.querySelectorAll("a[href^='https://t.co/'][data-expanded-url^='http']").forEach(a => {
						a.href = a.dataset.expandedUrl;
					});
				}
				document.querySelectorAll(qstall).forEach(a => {
					let aF = (a.tagName == 'A' ? (new URL(a.href)).hostname : (new URL(a.src)).hostname) || '';
					if (!asked.includes(aF) && !/^(.*)\.(danwin1210\.me|onion|i2p|invalid|test|local|localhost|([0-9]{1,3})|bbs|chan|cyb|dyn|geek|gopher|indy|libre|neo|null|o|oss|oz|parody|pirate|bit|lib|coin|emc|bazar|fur)$/.test(aF)) {
						asked.push(aF);
						chrome.runtime.sendMessage(aF);
					}
				});
			}
			scanme();
			chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
				if (request.length == 2) {
					document.querySelectorAll(qstall).forEach(a => {
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
			if (g.obs == 'y') {
				(new MutationObserver(scanme)).observe(document, {
					attributes: true,
					childList: true,
					subtree: true
				});
			}
		});
	}
}