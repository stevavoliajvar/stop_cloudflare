let irun = false;
document.addEventListener('DOMContentLoaded', () => {
	browser.storage.local.get(['mul']).then(g => {
		let ul = g.mul || 'eo';
		fetch('i18n/' + ul + '.json', {
			method: 'GET'
		}).then(j => j.json()).then(j => {
			document.querySelectorAll('span[tek]').forEach(x => {
				x.innerText = j[x.getAttribute('tek')];
			});
			document.body.style.display = 'block';
		});
	});
});
document.getElementById('f').addEventListener('change', e => {
	let ff = e.target.files[0];
	if (ff) {
		let r = new FileReader();
		r.addEventListener('load', e => {
			if (ff.size > 4) {
				let g = e.target.result.replace(/(?:\r\n|\r|\n)/g, "\n").split("\n");
				if (g.length > 0) {
					browser.storage.local.get(['ldb']).then(gs => {
						irun = true;
						let cnt0, cnt1 = 0,
							gc = 1,
							db = JSON.parse(gs.ldb || '[]');
						cnt0 = db.length;
						document.getElementById('pbr').max = g.length;
						g.forEach(x => {
							document.getElementById('pbr').value = gc;
							gc++;
							if (/^([0-9a-z.-]{4,400})\.([a-z]{2,40})$/.test(x) && !db.includes(x)) {
								db.push(x);
							}
						});
						g = null;
						cnt1 = db.length;
						if (cnt1 != cnt0) {
							browser.storage.local.set({
								'ldb': JSON.stringify(db)
							});
						}
						browser.runtime.sendMessage('dbmode,rl').then(() => {
							alert(document.querySelector('span[tek=opxdone]').innerText + "\n\n" + cnt0 + " -> " + cnt1);
							location.reload();
						});
					});
				}
			}
		});
		r.readAsText(ff);
	}
});
document.getElementById('ldb_i').addEventListener('click', () => {
	if (!irun) {
		document.getElementById('f').click();
	}
});
document.getElementById('ldb_c').addEventListener('click', () => {
	if (!irun) {
		browser.runtime.sendMessage('dbmode,cl').then(() => {
			alert(document.querySelector('span[tek=opxdone]').innerText);
			location.reload();
		});
	}
});