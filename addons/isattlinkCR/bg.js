let localUse = false,
	localDB = [],
	timr, memcache = {},
	forcePurge = false,
	apiurl = 'https://api.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/_/is_antitor.php';
function is_hostile(f) {
	if (localUse) {
		return new Promise((g, b) => {
			g(localDB.includes(f) ? true : false);
		});
	}
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
function i_know_you(f) {
	if (!/^([a-z0-9_.-]{1,255})\.([a-z]{2,80})$/.test(f)) {
		return new Promise((g, b) => {
			g(200);
		});
	}
	let m;
	if (memcache[f] != undefined) {
		m = memcache[f];
		return new Promise((g, b) => {
			g(m);
		});
	}
	return new Promise((g, b) => {
		chrome.storage.local.get([f], (ff) => {
			if (ff[f]) {
				if (ff[f] == 'y') {
					memcache[f] = 1;
					g(1);
				} else {
					memcache[f] = -1;
					g(-1);
				}
			} else {
				g(0);
			}
		});
	});
}
function forget_cache() {
	chrome.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb'], g => {
		chrome.storage.local.clear();
		memcache = {};
		chrome.storage.local.set({
			'ign1': (g.ign1 == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'obs': (g.obs == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'dbg': (g.dbg == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'alt': (g.alt == 'y' ? 'y' : 'n')
		});
		chrome.storage.local.set({
			'cep': (g.cep != undefined ? g.cep : '2')
		});
		chrome.storage.local.set({
			'mul': (g.mul != undefined ? g.mul : 'eo')
		});
		chrome.storage.local.set({
			'opd': (g.opd == 'n' ? 'n' : 'y')
		});
		chrome.storage.local.set({
			'ldb': (g.ldb != undefined ? g.ldb : '[]')
		});
		chrome.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
		chrome.storage.local.set({
			'lastV': (chrome.runtime.getManifest()).version
		});
	});
	clearTimeout(timr);
	timr = setTimeout(function () {
		forget_cache();
	}, 1814400000);
}
chrome.storage.local.get(['lastU', 'lastV', 'ldb', 'opd', 'cep'], g => {
	localUse = (g.opd == 'n') ? true : false;
	localDB = JSON.parse(g.ldb || '[]');
	switch (g.cep) {
		case '1':
			apiurl = 'https://api.crimeflare.eu.org/_/is_antitor.php';
			break;
		case '2':
			apiurl = 'http://avrynpc2q7pknqa3ucf5tvjcwad5nxvxgwnzvl2b6dx6uo4f7nc7zzqd.onion/a/is_at.php';
			break;
		default:
			apiurl = 'https://api.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/_/is_antitor.php';
			break;
	}
	if (g.lastU) {
		if (Math.abs(Math.round((new Date()).getTime() / 1000) - g.lastU) > 1814400) {
			chrome.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb'], g => {
				chrome.storage.local.clear();
				memcache = {};
				chrome.storage.local.set({
					'ign1': (g.ign1 == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'obs': (g.obs == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'dbg': (g.dbg == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'alt': (g.alt == 'y' ? 'y' : 'n')
				});
				chrome.storage.local.set({
					'cep': (g.cep != undefined ? g.cep : '2')
				});
				chrome.storage.local.set({
					'mul': (g.mul != undefined ? g.mul : 'eo')
				});
				chrome.storage.local.set({
					'opd': (g.opd == 'n' ? 'n' : 'y')
				});
				chrome.storage.local.set({
					'ldb': (g.ldb != undefined ? g.ldb : '[]')
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
	if (g.lastV != nowVer || forcePurge) {
		chrome.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb'], g => {
			chrome.storage.local.clear();
			memcache = {};
			chrome.storage.local.set({
				'ign1': (g.ign1 == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'obs': (g.obs == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'dbg': (g.dbg == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'alt': (g.alt == 'y' ? 'y' : 'n')
			});
			chrome.storage.local.set({
				'cep': (g.cep != undefined ? g.cep : '2')
			});
			chrome.storage.local.set({
				'mul': (g.mul != undefined ? g.mul : 'eo')
			});
			chrome.storage.local.set({
				'opd': (g.opd == 'n' ? 'n' : 'y')
			});
			chrome.storage.local.set({
				'ldb': (g.ldb != undefined ? g.ldb : '[]')
			});
			chrome.storage.local.set({
				'lastU': Math.round((new Date()).getTime() / 1000)
			});
			chrome.storage.local.set({
				'lastV': (chrome.runtime.getManifest()).version
			});
		});
	}
	timr = setTimeout(function () {
		forget_cache();
	}, 1814400000);
});
chrome.runtime.onMessage.addListener((requests, sender, sendResponse) => {
	if (requests) {
		if (requests === 'clear') {
			forget_cache();
			return;
		}
		if (requests.indexOf('dbmode,') === 0) {
			switch (requests) {
				case 'dbmode,s1':
					chrome.storage.local.set({
						'opd': 'y'
					});
					localUse = false;
					break;
				case 'dbmode,s0':
					chrome.storage.local.set({
						'opd': 'n'
					});
					localUse = true;
					break;
				case 'dbmode,cl':
					chrome.storage.local.set({
						'ldb': '[]'
					});
					localDB = [];
					break;
				case 'dbmode,rl':
					chrome.storage.local.get(['ldb'], (g) => {
						localDB = JSON.parse(g.ldb || '[]');
					});
					break;
			}
			return;
		}
		if (requests.indexOf('urltype,') === 0) {
			switch (requests) {
				case 'urltype,0':
					chrome.storage.local.set({
						'cep': '0'
					});
					apiurl = 'https://api.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/_/is_antitor.php';
					break;
				case 'urltype,1':
					chrome.storage.local.set({
						'cep': '1'
					});
					apiurl = 'https://api.crimeflare.eu.org/_/is_antitor.php';
					break;
				case 'urltype,2':
					chrome.storage.local.set({
						'cep': '2'
					});
					apiurl = 'http://avrynpc2q7pknqa3ucf5tvjcwad5nxvxgwnzvl2b6dx6uo4f7nc7zzqd.onion/a/is_at.php';
					break;
			}
			return;
		}
		requests.forEach(request => {
			i_know_you(request).then((r) => {
				if (r == 1 || r == -1) {
					chrome.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
				}
				if (r == 0) {
					is_hostile(request).then((a) => {
						if (a) {
							chrome.storage.local.set({
								[request]: 'y'
							});
						} else {
							chrome.storage.local.set({
								[request]: 'n'
							});
						}
						if (Object.keys(memcache).length > 650) {
							memcache = {};
						}
						chrome.tabs.sendMessage(sender.tab.id, [request, a]);
					}, () => {
						chrome.tabs.sendMessage(sender.tab.id, [request, false]);
					});
				}
			}, () => {});
		});
	}
	return;
});