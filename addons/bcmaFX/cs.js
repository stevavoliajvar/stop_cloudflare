if (document.body && !location.hostname.endsWith('.onion')) {
	browser.runtime.onMessage.addListener((a, b, c) => {
		if (a[0] == location.hostname && a[1]) {
			if (a[2]) {
				let _tt = document.title;
				function codeBy_Sw_updateBorder() {
					if (!document.title.startsWith('[!!MITM')) {
						document.title = '[!!MITM!!]' + _tt;
					}
					document.body.style = 'border:6px dashed #' + ['e74c3c', '9b59b6', '3498db', '17a589', '196f3d', 'f4d03f', 'f39c12', 'd35400'][Math.floor(Math.random() * 8)] + ' !important';
					setTimeout(codeBy_Sw_updateBorder, 6500);
				}
				codeBy_Sw_updateBorder();
			}
			if (a[3]) {
				function codeBy_smege1001_decodeEmail(hash) {
					let decoded = '',
						hashArray = [];
					for (let hAIndex = 0; hAIndex < hash.length; hAIndex += 2) {
						hashArray.push(parseInt(hash.substring(hAIndex, hAIndex + 2), 16));
					}
					let key = hashArray[0];
					for (let index = 1; index < hashArray.length; index++) {
						decoded += String.fromCharCode(hashArray[index] ^ key);
					}
					return decoded;
				}
				document.querySelectorAll('.__cf_email__[data-cfemail]:not(a)').forEach(a => {
					let aV = a.dataset.cfemail;
					if (/^([a-f0-9]{4,})$/.test(aV)) {
						a.dataset.cfemail = '';
						a.innerText = codeBy_smege1001_decodeEmail(aV);
					}
				});
				document.querySelectorAll("a.__cf_email__[data-cfemail]").forEach(a => {
					let aV = a.dataset.cfemail;
					if (/^([a-f0-9]{4,})$/.test(aV)) {
						a.dataset.cfemail = '';
						a.innerText = codeBy_smege1001_decodeEmail(aV);
						a.href = 'mailto:' + a.innerText;
					}
				});
			}
		}
		c(true);
		return;
	});
	browser.runtime.sendMessage(['cs', location.hostname]);
}