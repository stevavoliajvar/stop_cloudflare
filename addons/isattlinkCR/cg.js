document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.local.get(['ign1', 'obs', 'dbg', 'alt', 'mul', 'opd', 'cep'], g => {
		document.getElementById('ign1').checked = (g.ign1 == 'y') ? true : false;
		document.getElementById('obs').checked = (g.obs == 'y') ? true : false;
		document.getElementById('alt').checked = (g.alt == 'y') ? true : false;
		document.getElementById('opon').checked = (g.opd != 'n') ? true : false;
		document.getElementById('opoff').checked = (g.opd == 'n') ? true : false;
		switch (g.cep) {
			case '1':
				document.getElementById('ut0').checked = false;
				document.getElementById('ut1').checked = true;
				document.getElementById('ut2').checked = false;
				break;
			case '2':
				document.getElementById('ut0').checked = false;
				document.getElementById('ut1').checked = false;
				document.getElementById('ut2').checked = true;
				break;
			default:
				document.getElementById('ut0').checked = true;
				document.getElementById('ut1').checked = false;
				document.getElementById('ut2').checked = false;
				break;
		}
		let ul = g.mul || 'eo';
		fetch('i18n/' + ul + '.json', {
			method: 'GET'
		}).then(j => j.json()).then(j => {
			document.querySelectorAll('span[tek]').forEach(x => {
				x.innerText = j[x.getAttribute('tek')];
			});
		});
		document.body.style.display = 'block';
	});
});
document.getElementById('myul').addEventListener('change', () => {
	let xul = document.getElementById('myul').value;
	if (xul.length == 2) {
		chrome.storage.local.set({
			'mul': xul
		});
		location.reload(true);
	}
});
document.getElementById('ign1').addEventListener('click', () => {
	chrome.storage.local.set({
		'ign1': (document.getElementById('ign1').checked ? 'y' : 'n')
	});
});
document.getElementById('obs').addEventListener('click', () => {
	chrome.storage.local.set({
		'obs': (document.getElementById('obs').checked ? 'y' : 'n')
	});
});
document.getElementById('alt').addEventListener('click', () => {
	chrome.storage.local.set({
		'alt': (document.getElementById('alt').checked ? 'y' : 'n')
	});
});
document.getElementById('opon').addEventListener('click', () => {
	chrome.runtime.sendMessage('dbmode,s1', () => {
		location.reload();
	});
});
document.getElementById('opoff').addEventListener('click', () => {
	chrome.runtime.sendMessage('dbmode,s0', () => {
		location.reload();
	});
});
document.getElementById('crs').addEventListener('click', () => {
	chrome.runtime.sendMessage('clear', () => {
		location.reload();
	});
});
document.getElementById('ut0').addEventListener('click', () => {
	chrome.runtime.sendMessage('urltype,0', () => {
		location.reload();
	});
});
document.getElementById('ut1').addEventListener('click', () => {
	chrome.runtime.sendMessage('urltype,1', () => {
		location.reload();
	});
});
document.getElementById('ut2').addEventListener('click', () => {
	chrome.runtime.sendMessage('urltype,2', () => {
		location.reload();
	});
});
document.getElementById('sms').addEventListener('click', () => {
	document.getElementById('smsa').style.display = 'none';
	chrome.storage.local.get(null, g => {
		let iY = 0,
			iN = 0,
			iT, tmp, akd = [];
		Object.keys(g).forEach(a => {
			if (!['ign1', 'obs', 'dbg', 'alt', 'lastU', 'lastV', 'cep', 'mul', 'opd', 'ldb'].includes(a) && (g[a] == 'y' || g[a] == 'n')) {
				if (!akd.includes(a)) {
					akd.push(a);
					if (g[a] == 'y') {
						iY++;
					} else {
						iN++;
					}
				}
			}
		});
		iT = iY + iN;
		if (iT > 0) {
			tmp = (iY * 100 / iT).toFixed(1);
			document.getElementById('viry').innerText = iY + ' (' + tmp + '%)';
			tmp = (iN * 100 / iT).toFixed(1);
			document.getElementById('virn').innerText = iN + ' (' + tmp + '%)';
			document.getElementById('viro').innerText = (iY + iN);
		} else {
			document.getElementById('viry').innerText = 0;
			document.getElementById('virn').innerText = 0;
			document.getElementById('viro').innerText = 0;
		}
		document.getElementById('smsb').style.display = 'inline';
	});
});