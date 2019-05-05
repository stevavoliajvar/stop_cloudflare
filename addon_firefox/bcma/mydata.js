function onError(e) {
	console.log(`BCMA: Error:${e}`);
}

document.addEventListener('DOMContentLoaded', function () {
	browser.runtime.sendMessage(['cf']).then(function (r) {
		if (r[0] == 'ok') {
			document.getElementById('t').value = JSON.parse(r[1]).join("\n");
			document.getElementById('g').value = JSON.parse(r[2]).join("\n");
			if (r[3]) {
				document.getElementById('bi0').checked = true;
				document.getElementById('bi1').checked = false;
			} else {
				document.getElementById('bi0').checked = false;
				document.getElementById('bi1').checked = true;
			}
			switch (r[4]) {
				case 1:
					document.getElementById('ta0').checked = false;
					document.getElementById('ta1').checked = true;
					document.getElementById('ta2').checked = false;
					document.getElementById('ta3').checked = false;
					break;
				case 2:
					document.getElementById('ta0').checked = false;
					document.getElementById('ta1').checked = false;
					document.getElementById('ta2').checked = true;
					document.getElementById('ta3').checked = false;
					break;
				case 3:
					document.getElementById('ta0').checked = false;
					document.getElementById('ta1').checked = false;
					document.getElementById('ta2').checked = false;
					document.getElementById('ta3').checked = true;
					break;
				default:
					document.getElementById('ta0').checked = false;
					document.getElementById('ta1').checked = false;
					document.getElementById('ta2').checked = true;
					document.getElementById('ta3').checked = false;
					break;
			}
			document.body.style.display = 'block';
			document.addEventListener('contextmenu', function (z) {
				if (z.target.tagName != 'TEXTAREA') {
					z.preventDefault();
				}
			});
		}
	}, onError);
});

document.getElementById('exp').addEventListener('click', function () {
	browser.tabs.create({
		active: true,
		url: 'about:blank'
	}).then(function (t) {
		browser.tabs.executeScript(t.id, {
			matchAboutBlank: true,
			code: "document.documentElement.innerHTML='<html><head><title>Data</title></head><body><pre>'+atob('" + btoa(document.getElementById('t').value) + "')+'</pre></body></html>';window.stop();"
		}).then(function (e) {}, onError);
	}, onError);
});

document.getElementById('clr').addEventListener('click', function () {
	browser.runtime.sendMessage(['erosman']).then(function (r) {
		document.getElementById('t').value = '';
	}, onError);
});
document.getElementById('bi0').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['bi', 'y']).then(function (r) {}, onError);
	}
});
document.getElementById('bi1').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['bi', 'n']).then(function (r) {}, onError);
	}
});
document.getElementById('ta0').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['ta', '0']).then(function (r) {}, onError);
	}
});
document.getElementById('ta1').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['ta', '1']).then(function (r) {}, onError);
	}
});
document.getElementById('ta2').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['ta', '2']).then(function (r) {}, onError);
	}
});
document.getElementById('ta3').addEventListener('click', function () {
	if (this.checked) {
		browser.runtime.sendMessage(['ta', '3']).then(function (r) {}, onError);
	}
});
document.getElementById('ign').addEventListener('click', function () {
	browser.runtime.sendMessage(['ig', document.getElementById('g').value.split("\n")]).then(function (r) {}, onError);
});
