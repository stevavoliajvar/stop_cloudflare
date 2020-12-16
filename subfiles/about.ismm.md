### Are links vulnerable to MITM attack?

`Scan FQDN using API`

![](../image/ismmpreview.jpg)


```

You′ve found something on the internet.
Are these links or images vulnerable to MITM attack or not?
 
This add-on is using[1] Ss′ Public[4] API to scan[3] FQDN.
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

[3] "Observe and Learn" mode
	If you don't want to use online public API, or don't want to maintain offline database
	this option is for you.
	You'll have to visit cloudflared website first because this add-on never make a
	request to websites.
	To activate this option, go to "Database" section and select "Use offline local database".
	To purge local database, go to "Database" section and click "Database", "Clear all data".

[4] Public API services
	You can select which API service you want to use.

```


- Code
  - [Firefox](https://git.fuwafuwa.moe/you/stop_cloudflare/src/branch/master/addons/ismitmlinkFX)
  - [Chromium](https://git.fuwafuwa.moe/you/stop_cloudflare/src/branch/master/addons/ismitmlinkCR)
- Download add-on
  - From Ss (_Recommend_): [Firefox ESR / Chromium](https://sercxi.nnpaefp7pkadbxxkhz2agtbv2a4g5sgo2fbmv3i7czaua354334uqqad.onion/)
  - From Gitea (Delay Sync): [FirefoxESR](https://git.fuwafuwa.moe/you/stop_cloudflare/raw/branch/master/addons/releases/ismm.xpi) / [Chromium](https://git.fuwafuwa.moe/you/stop_cloudflare/raw/branch/master/addons/releases/ismm.crx)
