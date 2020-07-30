function newrow(w) {
	let tt = document.getElementsByTagName('tbody')[0];
	let tr = tt.insertRow(tt.rows.length);
	tr.innerHTML = w;
}
newrow('<tr><td><b>FQDN</b></td><td><b>Servilo</b></td><td><b>Stato</b></td><td><b>Kie</b></td><td><b>Kiam</b></td></tr>');
chrome.runtime.sendMessage('get', g => {
	for (let k in g) {
		newrow('<tr><td>' + k + '</td><td>' + g[k][1] + '</td><td>' + g[k][2] + '</td><td><a href="' + g[k][0] + '" rel="noreferrer noopener" target="_blank"> &#128279; </a></td><td>' + g[k][3] + '</td></tr>');
		document.getElementById('export').innerHTML += k + "\n";
	}
});
document.body.style.display = 'block';
document.getElementById('clear').addEventListener('click', () => {
	chrome.runtime.sendMessage('clear', () => {
		location.reload(true);
	});
});