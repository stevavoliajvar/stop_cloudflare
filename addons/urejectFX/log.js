function newrow(w) {
	let tt = document.getElementsByTagName('tbody')[0];
	let tr = tt.insertRow(tt.rows.length);
	tr.innerHTML = w;
}
document.addEventListener('DOMContentLoaded', () => {
	browser.storage.local.get(['ul']).then((r) => {
		fetch('i18n/' + (r.ul || 'eo') + '.json', {
			method: 'GET'
		}).then(j => j.json()).then(j => {
			document.querySelectorAll('span[transk]').forEach(x => {
				x.innerText = j[x.getAttribute('transk')];
			});
			newrow('<tr><td><b>FQDN</b></td><td><b>' + j['lj1'] + '</b></td><td><b>' + j['lj2'] + '</b></td><td><b>' + j['lj3'] + '</b></td><td><b>' + j['lj4'] + '</b></td></tr>');
			browser.runtime.sendMessage('get').then(g => {
				for (let k in g) {
					newrow('<tr><td>' + k + '</td><td>' + g[k][1] + '</td><td>' + g[k][2] + '</td><td><a href="' + g[k][0] + '" rel="noreferrer noopener" target="_blank"> &#128279; </a></td><td>' + g[k][3] + '</td></tr>');
					document.getElementById('export').innerHTML += k + "\n";
				}
			});
			document.body.style.display = 'block';
		});
	});
	document.getElementById('clear').addEventListener('click', () => {
		browser.runtime.sendMessage('clear').then(() => {
			location.reload(true);
		});
	});
	document.getElementById('myul').addEventListener('change', () => {
		if (document.getElementById('myul').value != '') {
			browser.storage.local.set({
				'ul': document.getElementById('myul').value
			}).then(() => {
				location.reload(true);
			});
		}
	});
});