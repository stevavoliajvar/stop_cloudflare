const apiurl = 'https://searxes.danwin1210.me/collab/open/ismitm.php';
let mymemory = {};

function ismitm(f) {
	return new Promise((g, b) => {
		fetch(apiurl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'f=' + f
		}).then(function (r) {
			return r.json();
		}).then(function (r) {
			if (r[0]) {
				g(r[1]);
			} else {
				b();
			}
		}).catch(b);
	});
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request && sender) {
		if (mymemory[request] != undefined) {
			let rlt = mymemory[request];
			if (Object.keys(mymemory).length > 800) {
				let cnt = 1;
				for (let t in mymemory) {
					if (cnt > 10) {
						break;
					}
					mymemory[t] = null;
					delete mymemory[t];
					cnt++;
				}
			}
			browser.tabs.sendMessage(sender.tab.id, [request, rlt]);
		} else {
			ismitm(request).then(function (a) {
				mymemory[request] = a;
				browser.tabs.sendMessage(sender.tab.id, [request, a]);
			}, function () {
				browser.tabs.sendMessage(sender.tab.id, [request, false]);
			});
		}
	}
});