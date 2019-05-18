let apiurl = 'https://searxes.eu.org/collab/open/ismitm.php';
let TORapiurl = 'http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/collab/open/ismitm.php';

fetch('http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/collab/open/ok', {
	method: 'GET',
	mode: 'cors'
}).then(r => r.text()).then(r => {
	if (r == 'ok') {
		apiurl = TORapiurl;
	}
}).catch(() => {});

function is_infected(f) {
	console.log(f);
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

function i_remember_you(f, t) {
	chrome.storage.local.set({
		[f]: ((t) ? 'y' : 'n')
	});
}

function clear_cache_week() {
	chrome.storage.local.clear();
	setTimeout(function () {
		clear_cache();
	}, 604800000);
}

clear_cache_week();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request) {
		i_already_know_you(request).then((r) => {
			if (r == 1 || r == -1) {
				chrome.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
			}
			if (r == 0) {
				is_infected(request).then((a) => {
					i_remember_you(request, a);
					chrome.tabs.sendMessage(sender.tab.id, [request, a]);
				}, () => {
					chrome.tabs.sendMessage(sender.tab.id, [request, false]);
				});
			}
		}, () => {});
	}
});