let apiurl = 'https://searxes.danwin1210.me/collab/open/ismitm.php';
let TORapiurl = 'http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/collab/open/ismitm.php';

fetch('http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/collab/open/hi.php', {
	method: 'GET',
	mode: 'cors'
}).then(r => r.text()).then(r => {
	if (r == 'hi') {
		apiurl = TORapiurl;
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

function i_remember_you(f, t) {
	browser.storage.local.set({
		[f]: ((t) ? 'y' : 'n')
	});
}

browser.storage.local.clear().then(() => {
	browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request && sender) {
			i_already_know_you(request).then((r) => {
				if (r == 1 || r == -1) {
					browser.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
				}
				if (r == 0) {
					is_infected(request).then((a) => {
						i_remember_you(request, a);
						browser.tabs.sendMessage(sender.tab.id, [request, a]);
					}, () => {
						browser.tabs.sendMessage(sender.tab.id, [request, false]);
					});
				}
			}, () => {});
		}
	});
}, () => {});