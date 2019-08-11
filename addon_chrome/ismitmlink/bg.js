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
		chrome.storage.local.get(f, (ff) => {
			if (ff[f]) {
				if (ff[f] == 'y') {
					g(1);
				} else {
					g(-1);
				}
			} else {
				g(0);
			}
		});
	});
}

function forget_cache_1w() {
	chrome.storage.local.get(['ign1', 'ign2', 'obs'], (g) => {
		chrome.storage.local.clear();
		chrome.storage.local.set({
			'ign1': (g.ign1 == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'ign2': (g.ign2 == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'obs': (g.obs == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
		chrome.storage.local.set({
			'lastV': (chrome.runtime.getManifest()).version
		});
	});
	setTimeout(function () {
		forget_cache_1w();
	}, 604800000);
}

chrome.storage.local.get(['lastU', 'lastV'], (g) => {
	if (g.lastU) {
		if (Math.abs(Math.round((new Date()).getTime() / 1000) - g.lastU) > 604800) {
			chrome.storage.local.get(['ign1', 'ign2', 'obs'], (g) => {
				chrome.storage.local.clear();
				chrome.storage.local.set({
					'ign1': (g.ign1 == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'ign2': (g.ign2 == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'obs': (g.obs == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'lastU': Math.round((new Date()).getTime() / 1000)
				});
			});
		}
	} else {
		chrome.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
	}
	let nowVer = (chrome.runtime.getManifest()).version;
	if (g.lastV != nowVer) {
		chrome.storage.local.get(['ign1', 'ign2', 'obs'], (g) => {
			chrome.storage.local.clear();
			chrome.storage.local.set({
				'ign1': (g.ign1 == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'ign2': (g.ign2 == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'obs': (g.obs == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'lastU': Math.round((new Date()).getTime() / 1000)
			});
			chrome.storage.local.set({
				'lastV': (chrome.runtime.getManifest()).version
			});
		});
	}
	setTimeout(function () {
		forget_cache_1w();
	}, 604800000);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request && sender) {
		i_already_know_you(request).then((r) => {
			if (r == 1 || r == -1) {
				chrome.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
			}
			if (r == 0) {
				is_infected(request).then((a) => {
					chrome.storage.local.set({
						[request]: ((a) ? 'y' : 'n')
					});
					chrome.tabs.sendMessage(sender.tab.id, [request, a]);
				}, () => {
					chrome.tabs.sendMessage(sender.tab.id, [request, false]);
				});
			}
		}, () => {});
	}
});