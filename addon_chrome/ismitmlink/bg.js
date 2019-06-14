let apiurl = 'https://searxes.eu.org/collab/open/ismitm.php';

fetch('http://xxf4en4djo7hhvatax2g3lvj2qgvbwi4yeyyzwpo25zcog4ewhsbrdyd.onion/ok.php', {
	method: 'GET',
	mode: 'cors'
}).then(r => r.text()).then(r => {
	if (r == 'ok') {
		apiurl = 'http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/collab/open/ismitm.php';
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

function clear_cache_2w() {
	chrome.storage.local.clear();
	chrome.storage.local.set({
		'lastU': Math.round((new Date()).getTime() / 1000)
	});
	setTimeout(function () {
		clear_cache_2w();
	}, 1209600000);
}

chrome.storage.local.get('lastxU', (g) => {
	if (g.lastU) {
		if (Math.abs(Math.round((new Date()).getTime() / 1000) - g.lastU) > 1209600) {
			chrome.storage.local.clear();
			chrome.storage.local.set({
				'lastU': Math.round((new Date()).getTime() / 1000)
			});
		}
	} else {
		chrome.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
	}
	setTimeout(function () {
		clear_cache_2w();
	}, 1209600000);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request) {
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