document.addEventListener('DOMContentLoaded', () => {
	chrome.runtime.sendMessage(['cf'], (r) => {
		fetch('i18n/' + r[5] + '.json', {
			method: 'GET'
		}).then(j => j.json()).then(j => {
			document.querySelectorAll('span[transk]').forEach(x => {
				x.innerText = j[x.getAttribute('transk')];
			});
		});
		document.getElementById('t').value = JSON.parse(r[0]).join("\n");
		document.getElementById('g').value = JSON.parse(r[1]).join("\n");
		document.getElementById('vau').value = r[3];
		document.getElementById('nnf1').checked = r[4][0];
		document.getElementById('nnf2').checked = r[4][1];
		document.getElementById('csa1').checked = r[4][2];
		document.getElementById('csa2').checked = r[4][3];
		switch (r[2]) {
			case 0:
				document.getElementById('ta0').checked = true;
				document.getElementById('ta1').checked = false;
				document.getElementById('ta2').checked = false;
				document.getElementById('ta3').checked = false;
				document.getElementById('ta4').checked = false;
				break;
			case 1:
				document.getElementById('ta0').checked = false;
				document.getElementById('ta1').checked = true;
				document.getElementById('ta2').checked = false;
				document.getElementById('ta3').checked = false;
				document.getElementById('ta4').checked = false;
				break;
			case 3:
				document.getElementById('ta0').checked = false;
				document.getElementById('ta1').checked = false;
				document.getElementById('ta2').checked = false;
				document.getElementById('ta3').checked = true;
				document.getElementById('ta4').checked = false;
				break;
			case 4:
				document.getElementById('ta0').checked = false;
				document.getElementById('ta1').checked = false;
				document.getElementById('ta2').checked = false;
				document.getElementById('ta3').checked = false;
				document.getElementById('ta4').checked = true;
				break;
			default:
				document.getElementById('ta0').checked = false;
				document.getElementById('ta1').checked = false;
				document.getElementById('ta2').checked = true;
				document.getElementById('ta3').checked = false;
				document.getElementById('ta4').checked = false;
				break;
		}
	});
	document.getElementById('aus').addEventListener('click', function () {
		chrome.runtime.sendMessage(['au', document.getElementById('vau').value]);
	});
	document.getElementById('clr').addEventListener('click', () => {
		chrome.runtime.sendMessage(['dy']);
		document.getElementById('t').value = '';
	});
	document.getElementById('nnf1').addEventListener('click', function () {
		chrome.runtime.sendMessage(['nnf', '1', (this.checked ? true : false)]);
	});
	document.getElementById('nnf2').addEventListener('click', function () {
		chrome.runtime.sendMessage(['nnf', '2', (this.checked ? true : false)]);
	});
	document.getElementById('csa1').addEventListener('click', function () {
		chrome.runtime.sendMessage(['csa', '1', (this.checked ? true : false)]);
	});
	document.getElementById('csa2').addEventListener('click', function () {
		chrome.runtime.sendMessage(['csa', '2', (this.checked ? true : false)]);
	});
	document.getElementById('ta0').addEventListener('click', function () {
		if (this.checked) {
			chrome.runtime.sendMessage(['ta', '0']);
		}
	});
	document.getElementById('ta1').addEventListener('click', function () {
		if (this.checked) {
			chrome.runtime.sendMessage(['ta', '1']);
		}
	});
	document.getElementById('ta2').addEventListener('click', function () {
		if (this.checked) {
			chrome.runtime.sendMessage(['ta', '2']);
		}
	});
	document.getElementById('ta3').addEventListener('click', function () {
		if (this.checked) {
			chrome.runtime.sendMessage(['ta', '3']);
		}
	});
	document.getElementById('ta4').addEventListener('click', function () {
		if (this.checked) {
			chrome.runtime.sendMessage(['ta', '4']);
		}
	});
	document.getElementById('ign').addEventListener('click', function () {
		chrome.runtime.sendMessage(['ig', document.getElementById('g').value.split("\n")]);
	});
	document.getElementById('myul').addEventListener('change', () => {
		if (document.getElementById('myul').value != '') {
			chrome.runtime.sendMessage(['ul', document.getElementById('myul').value]);
			location.reload(true);
		}
	});
});