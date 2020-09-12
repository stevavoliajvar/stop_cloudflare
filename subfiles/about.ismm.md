### Are links vulnerable to MITM attack?

`Scan FQDN using API`

![](../image/ismmpreview.jpg)


```

You′ve found something on the internet.
Are these links or images vulnerable to MITM attack or not?
 
This add-on is using* Crimeflare′s Public API to scan*** FQDN.
	e.g. https://ekzemplo.com/page.html → "ekzemplo.com"

This add-on never send other information.



* How to use offline database
	1. Open add-on's option page and select "Use Offline Local Database".
	2. Click "Database" link.
	3. Create a new text file** (or download text file from cloudflare-tor)
	4. Click "Import Database" and select your text file.
	5. Wait until the message appear.

** Text file example
(FQDN/Domain)
--------------------
www.cloudflare.com
domain.com
example.org
--------------------

*** "Observe and Learn" mode (v1.0.21+)
	If you don't want to use online public API, or don't want to maintain offline database
	this option is for you.
	You'll have to visit cloudflared website first because this add-on never make a
	request to websites.
	To activate this option,
		go to "Database" section and select "Use offline local database (Detect and remember)".
	To clear local database,
		go to "Database" section and click "Database". Click "Clear all data".

```
 

Download add-on
- From Crimeflare (_Recommend_): [Firefox ESR / Chromium](https://crimeflare.wodferndripvpe6ib4uz4rtngrnzichnirgn7t5x64gxcyroopbhsuqd.onion/)
- From Gitea (Delay Sync): [FirefoxESR](../addons/releases/ismm.xpi) / [Chromium](../addons/releases/ismm.crx)
