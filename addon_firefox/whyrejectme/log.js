function newrow(w) {
	let tt = document.getElementsByTagName('tbody')[0];
	let tr = tt.insertRow(tt.rows.length);
	tr.innerHTML = w;
}

newrow('<tr><td><b>FQDN</b></td><td><b>Server</b></td><td><b>Code</b></td><td><b>Where</b></td><td><b>When</b></td></tr>');

browser.runtime.sendMessage('get').then(g => {
	for (let k in g) {
		newrow('<tr><td>' + k + '</td><td>' + g[k][1] + '</td><td>' + g[k][2] + '</td><td><a href="' + g[k][0] + '" rel="noreferrer" target="_blank">Link</a></td><td>' + g[k][3] + '</td></tr>');
		document.getElementById('export').innerHTML += k + "\n";
	}
});

document.body.style.display = 'block';

document.getElementById('clear').addEventListener('click', () => {
	browser.runtime.sendMessage('clear').then(() => {
		location.reload(true);
	});
});