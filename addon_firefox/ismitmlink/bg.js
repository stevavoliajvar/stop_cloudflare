let apiurl = 'https://api.searxes.eu.org/_/ismitm.php';
fetch('http://api.xxf4en4djo7hhvatax2g3lvj2qgvbwi4yeyyzwpo25zcog4ewhsbrdyd.onion/_/ok.php', {
	method: 'GET',
	mode: 'cors'
}).then(r => r.text()).then(r => {
	if (r == 'ok') {
		apiurl = 'http://api.xxf4en4djo7hhvatax2g3lvj2qgvbwi4yeyyzwpo25zcog4ewhsbrdyd.onion/_/ismitm.php';
	}
}).catch(() => {});

function is_infected(f) {
	return new Promise((g, b) => {
		fetch(apiurl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'f=' + f
		}).then(r => r.json()).then(r => {
			if (r[0]) {
				g(r[1]);
			} else {
				b();
			}
		}).catch(b);
	});
}

function i_already_know_you(f) {
	if (!/^([a-z0-9_.-]{1,255})\.([a-z]{2,80})$/.test(f)) {
		return false;
	}
	return new Promise((g, b) => {
		browser.storage.local.get(f).then((ff) => {
			if (ff[f]) {
				if (ff[f] == 'y') {
					g(1);
				} else {
					g(-1);
				}
			} else {
				g(0);
			}
		}, () => {
			g(0);
		});
	});
}

function clear_cache_1w() {
	browser.storage.local.clear();
	browser.storage.local.set({
		'lastU': Math.round((new Date()).getTime() / 1000)
	});
	browser.storage.local.set({
		'lastV': (browser.runtime.getManifest()).version
	});
	setTimeout(function () {
		clear_cache_1w();
	}, 604800000);
}

browser.storage.local.get(['lastU', 'lastV']).then(g => {
	if (g.lastU) {
		if (Math.abs(Math.round((new Date()).getTime() / 1000) - g.lastU) > 604800) {
			browser.storage.local.clear();
			browser.storage.local.set({
				'lastU': Math.round((new Date()).getTime() / 1000)
			});
		}
	} else {
		browser.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
	}
	let nowVer = (browser.runtime.getManifest()).version;
	if (g.lastV != nowVer) {
		console.log('Updated', nowVer);
		browser.storage.local.clear();
		browser.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
		browser.storage.local.set({
			'lastV': nowVer
		});
	}
	setTimeout(function () {
		clear_cache_1w();
	}, 604800000);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request && sender) {
		i_already_know_you(request).then((r) => {
			if (r == 1 || r == -1) {
				browser.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
			}
			if (r == 0) {
				is_infected(request).then((a) => {
					browser.storage.local.set({
						[request]: ((a) ? 'y' : 'n')
					});
					browser.tabs.sendMessage(sender.tab.id, [request, a]);
				}, () => {
					browser.tabs.sendMessage(sender.tab.id, [request, false]);
				});
			}
		}, () => {});
	}
});