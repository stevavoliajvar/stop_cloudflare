document.addEventListener('DOMContentLoaded', function () {
	chrome.runtime.sendMessage(['cf'], function (r) {
		if (r[0] == 'ok') {
			document.getElementById('t').value = JSON.parse(r[1]).join("\n");
			document.getElementById('g').value = JSON.parse(r[2]).join("\n");
			switch (r[3]) {
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
	});
});

document.getElementById('exp').style.display = 'none';

document.getElementById('clr').addEventListener('click', function () {
	chrome.runtime.sendMessage(['erosman'], function (r) {
		document.getElementById('t').value = '';
	});
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
document.getElementById('ign').addEventListener('click', function () {
	chrome.runtime.sendMessage(['ig', document.getElementById('g').value.split("\n")]);
});