### Will these links block Tor user?

`Scan FQDN using API`

![](../image/isatpreview.jpg)


```

You′ve found something on the internet.
Are these links blocking Tor users or not?
 
This add-on is using[1] Crimeflare′s Public[3] API to scan FQDN.
	e.g. https://ekzemplo.com/page.html → "ekzemplo.com"

This add-on never send other information.



[1] How to use offline database
	1. Open add-on's option page and select "Use Offline Local Database".
	2. Click "Database" link.
	3. Create a new text file[2] (or download text file from stop_cloudflare)
	4. Click "Import Database" and select your text file.
	5. Wait until the message appear.

[2] Text file example
	(FQDN/Domain)
	--------------------
	www.cloudflare.com
	domain.com
	example.org
	--------------------

[3] Public API services
	You can select which API service you want to use.

```


- Code
  - [Firefox](https://codeberg.org/crimeflare/stop_cloudflare/src/branch/master/addons/isattlinkFX)
  - [Chrome](https://codeberg.org/crimeflare/stop_cloudflare/src/branch/master/addons/isattlinkCR)
- Download add-on
  - From Crimeflare (_Recommend_): [Firefox ESR / Chromium](https://sercxi.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/)
  - From Gitea (Delay Sync): [FirefoxESR](https://codeberg.org/crimeflare/stop_cloudflare/raw/branch/master/addons/releases/isat.xpi) / [Chromium](https://codeberg.org/crimeflare/stop_cloudflare/raw/branch/master/addons/releases/isat.crx)
