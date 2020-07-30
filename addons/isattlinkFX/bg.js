let localUse = false,
	localDB = [],
	timr, memcache = {},
	forcePurge = false,
	apiurl = 'http://api.wodferndripvpe6ib4uz4rtngrnzichnirgn7t5x64gxcyroopbhsuqd.onion/_/is_antitor.php';
/*
browser.storage.local.get(['cep']).then(g => {
	if (g.cep == 'y') {
		apiurl = 'http://api.wodferndripvpe6ib4uz4rtngrnzichnirgn7t5x64gxcyroopbhsuqd.onion/_/is_antitor.php';
	} else {
		if (g.cep != 'n') {
			browser.storage.local.set({
				'cep': 'n'
			});
			fetch('http://api.wodferndripvpe6ib4uz4rtngrnzichnirgn7t5x64gxcyroopbhsuqd.onion/_/ok.php', {
				method: 'GET',
				mode: 'cors'
			}).then(r => r.text()).then(r => {
				if (r == 'ok') {
					apiurl = 'http://api.wodferndripvpe6ib4uz4rtngrnzichnirgn7t5x64gxcyroopbhsuqd.onion/_/is_antitor.php';
					browser.storage.local.set({
						'cep': 'y'
					});
				}
			}).catch(() => {});
		}
	}
});
*/
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
		browser.storage.local.get([f]).then((ff) => {
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
		}, () => {
			g(0);
		});
	});
}
function forget_cache() {
	browser.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb']).then(g => {
		browser.storage.local.clear();
		memcache = {};
		browser.storage.local.set({
			'ign1': (g.ign1 == 'y' ? 'y' : 'n')
		});
		browser.storage.local.set({
			'obs': (g.obs == 'y' ? 'y' : 'n')
		});
		browser.storage.local.set({
			'dbg': (g.dbg == 'y' ? 'y' : 'n')
		});
		browser.storage.local.set({
			'alt': (g.alt == 'y' ? 'y' : 'n')
		});
		browser.storage.local.set({
			'cep': (g.cep == 'y' ? 'y' : 'n')
		});
		browser.storage.local.set({
			'mul': (g.mul != undefined ? g.mul : 'eo')
		});
		browser.storage.local.set({
			'opd': (g.opd == 'n' ? 'n' : 'y')
		});
		browser.storage.local.set({
			'ldb': (g.ldb != undefined ? g.ldb : '[]')
		});
		browser.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
		browser.storage.local.set({
			'lastV': (browser.runtime.getManifest()).version
		});
	});
	clearTimeout(timr);
	timr = setTimeout(function () {
		forget_cache();
	}, 1814400000);
}
browser.storage.local.get(['lastU', 'lastV', 'ldb', 'opd']).then(g => {
	localUse = (g.opd == 'n') ? true : false;
	localDB = JSON.parse(g.ldb || '[]');
	if (g.lastU) {
		if (Math.abs(Math.round((new Date()).getTime() / 1000) - g.lastU) > 1814400) {
			browser.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb']).then(g => {
				browser.storage.local.clear();
				memcache = {};
				browser.storage.local.set({
					'ign1': (g.ign1 == 'y' ? 'y' : 'n')
				});
				browser.storage.local.set({
					'obs': (g.obs == 'y' ? 'y' : 'n')
				});
				browser.storage.local.set({
					'dbg': (g.dbg == 'y' ? 'y' : 'n')
				});
				browser.storage.local.set({
					'alt': (g.alt == 'y' ? 'y' : 'n')
				});
				browser.storage.local.set({
					'cep': (g.cep == 'y' ? 'y' : 'n')
				});
				browser.storage.local.set({
					'mul': (g.mul != undefined ? g.mul : 'eo')
				});
				browser.storage.local.set({
					'opd': (g.opd == 'n' ? 'n' : 'y')
				});
				browser.storage.local.set({
					'ldb': (g.ldb != undefined ? g.ldb : '[]')
				});
				browser.storage.local.set({
					'lastU': Math.round((new Date()).getTime() / 1000)
				});
			});
		}
	} else {
		browser.storage.local.set({
			'lastU': Math.round((new Date()).getTime() / 1000)
		});
	}
	let nowVer = (browser.runtime.getManifest()).version;
	if (g.lastV != nowVer || forcePurge) {
		console.log('Updated', nowVer);
		browser.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'cep', 'mul', 'opd', 'ldb']).then(g => {
			browser.storage.local.clear();
			memcache = {};
			browser.storage.local.set({
				'ign1': (g.ign1 == 'y' ? 'y' : 'n')
			});
			browser.storage.local.set({
				'obs': (g.obs == 'y' ? 'y' : 'n')
			});
			browser.storage.local.set({
				'dbg': (g.dbg == 'y' ? 'y' : 'n')
			});
			browser.storage.local.set({
				'alt': (g.alt == 'y' ? 'y' : 'n')
			});
			browser.storage.local.set({
				'cep': (g.cep == 'y' ? 'y' : 'n')
			});
			browser.storage.local.set({
				'mul': (g.mul != undefined ? g.mul : 'eo')
			});
			browser.storage.local.set({
				'opd': (g.opd == 'n' ? 'n' : 'y')
			});
			browser.storage.local.set({
				'ldb': (g.ldb != undefined ? g.ldb : '[]')
			});
			browser.storage.local.set({
				'lastU': Math.round((new Date()).getTime() / 1000)
			});
			browser.storage.local.set({
				'lastV': (browser.runtime.getManifest()).version
			});
		});
	}
	timr = setTimeout(function () {
		forget_cache();
	}, 1814400000);
});
browser.runtime.onMessage.addListener((requests, sender, sendResponse) => {
	if (requests) {
		if (requests === 'clear') {
			forget_cache();
			return;
		}
		if (requests.indexOf('dbmode,') === 0) {
			switch (requests) {
				case 'dbmode,s1':
					browser.storage.local.set({
						'opd': 'y'
					});
					localUse = false;
					break;
				case 'dbmode,s0':
					browser.storage.local.set({
						'opd': 'n'
					});
					localUse = true;
					break;
				case 'dbmode,cl':
					browser.storage.local.set({
						'ldb': '[]'
					});
					localDB = [];
					break;
				case 'dbmode,rl':
					browser.storage.local.get(['ldb']).then(g => {
						localDB = JSON.parse(g.ldb || '[]');
					});
					break;
			}
			return;
		}
		requests.forEach(request => {
			i_know_you(request).then((r) => {
				if (r == 1 || r == -1) {
					browser.tabs.sendMessage(sender.tab.id, [request, ((r == 1) ? true : false)]);
				}
				if (r == 0) {
					is_hostile(request).then((a) => {
						if (a) {
							browser.storage.local.set({
								[request]: 'y'
							});
						} else {
							browser.storage.local.set({
								[request]: 'n'
							});
						}
						if (Object.keys(memcache).length > 650) {
							memcache = {};
						}
						browser.tabs.sendMessage(sender.tab.id, [request, a]);
					}, () => {
						browser.tabs.sendMessage(sender.tab.id, [request, false]);
					});
				}
			}, () => {});
		});
	}
	return;
});