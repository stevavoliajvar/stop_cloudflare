# What you can do to resist Cloudflare?

![](image/matthew_prince.jpg) < [Matthew Prince (@eastdakota)](https://twitter.com/eastdakota)

"*I’d suggest this was armchair analysis by kids – it’s hard to take seriously.*" ([source](https://www.theguardian.com/technology/2015/nov/19/cloudflare-accused-by-anonymous-helping-isis))

------------


######  Website consumer

- If the website you like is using Cloudflare, tell them not to use Cloudflare.

```
"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."
```

If you don't ask for it, website owner never know this problem. Example below. [Successful example](https://counterpartytalk.org/t/turn-off-cloudflare-on-counterparty-co-plz/164/5). Raise your voice.

```
You are just helping corporate censorship and mass surveillance.
https://trac.torproject.org/projects/tor/ticket/24351
```

```
Your web page is in the privacy-abusing private walled-garden of CloudFlare.
See https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-460077544
```

- Take some time to read website's privacy policy. It must explain what the "Cloudflare" is, 
and ask for permission to share your(user) data with CF. Failure to do so will result in the breach of trust 
and the website in question should be avoided.

An acceptable privacy policy example is [here](https://archive.is/bDlTz) (look at "Subprocessors" > "Entity Name")

```
I've read your privacy policy and I cannot find the word "Cloudflare".
I refuse to share data with you if you continue to feed my data to Cloudflare.
See https://notabug.org/themusicgod1/cloudflare-tor/src/master/README.md
```

For example, [Liberland Jobs](https://archive.is/daKIr) [privacy policy](https://docsend.com/view/feiwyte) says:

![](image/cfwontobey.jpg)

... is not going to happen.
Cloudflare have their own "privacy policy", and there's no way to hear customer's privacy policy needs.
Cloudflare [loves doxxing people](https://www.reddit.com/r/GamerGhazi/comments/2s64fe/be_wary_reporting_to_cloudflare/).

Here's a good example for website's signup form.
AFAIK, zero website do this. Will you trust them?

```
By clicking “Sign up for XYZ”, you agree to our terms of service and privacy statement.
You also agree to share your data with Cloudflare and also agrees to cloudflare's privacy statement.
If Cloudflare leak your information, it's not our fault. [*]

[ Sign up for XYZ ] [ I disagree ]
```
[*] https://www.wired.com/2017/02/crazy-cloudflare-bug-jeopardized-millions-sites/


- Try not to use their service. Remember you are being watched by Cloudflare.

- Search for other website. There are many alternatives and opportunites on the internet!

- If your browser is Firefox, use one of these add-ons.

| Name | Developer | Support | Can Block | Can Notify |
| -------- | -------- | -------- | -------- | -------- |
| [Block Cloudflare MITM Attack](https://addons.mozilla.org/en-US/firefox/addon/bcma/) | Project BCMA | [Link](https://notabug.org/themusicgod1/cloudflare-tor/src/master/bcma) |**Yes**     | **Yes**     |
| [Block Cloudflare MITM Attack](https://trac.torproject.org/projects/tor/attachment/ticket/24351/block_cloudflare_mitm_attack-1.0.14.1-an%2Bfx.xpi) | nullius | [Link](https://github.com/nym-zone/block_cloudflare_mitm_fx) | **Yes**     | **Yes**     |
| [Are links vulnerable to MITM?](https://addons.mozilla.org/en-US/firefox/addon/are-links-vulnerable-to-mitm/) | Maslin Bossé | [Link](https://notabug.org/themusicgod1/cloudflare-tor/src/master/ismitmlink) | No     | **Yes**     |
| [Third-party Request Blocker (AMO)](https://addons.mozilla.org/en-US/firefox/addon/tprb/) | Searxes #Addon | [Link](https://searxes.danwin1210.me/) | **Yes**     | **Yes**     |
| [TPRB](https://searxes.danwin1210.me/collab/tprb0/get_tprb0.php) | Sw | [Link](https://sw.skusklxqaqnrmszytky4vfyrg625erw4hqhiokyc2ufnokd2aitb47yd.onion/) | **Yes**     | **Yes**     |
| [Detect Cloudflare](https://addons.mozilla.org/en-US/firefox/addon/detect-cloudflare/) | Frank Otto | [Link](https://github.com/traktofon/cf-detect) | No     | **Yes**     |
| [Cloud Firewall](https://addons.mozilla.org/en-US/firefox/addon/cloud-firewall/) [*] | Gokulakrishna Sudharsan | [Link](https://gitlab.com/gkrishnaks/cloud-firewall/) | **Yes** | No |

[*] Do not use it if you're using proxy/VPN/Tor because it has "[DNS leak](https://en.wikipedia.org/wiki/DNS_leak)".

- Convince your friends to use [Tor Browser](https://www.torproject.org/) on the daily basis. Anonymity should be the standard of the open internet!

------------

######  Website owner / Web developer

![](image/cfisnotanoption.jpg)

- Do not use Cloudflare solution.  You can do better than that, *right*?

- Want more customers? You know what to do. Hint is "above line".

![](image/anonexist.jpg)

- Using Cloudflare will increase chances of an outage. Visitors can't access to your website if your server is down  *or Cloudflare is down*. Did you really think [Cloudflare never go down](https://www.ibtimes.com/cloudflare-down-not-working-sites-producing-504-gateway-timeout-errors-2618008)? Another [sample](https://twitter.com/Jedduff/status/1097875615997399040).

- Using Cloudflare to proxy your "API service" will harm your customer. A customer called you and said "I can't use your API anymore", and you have no idea what is going on. Cloudflare can silently block your customer. [Do you think it is okay](https://twitter.com/Skyfusion89/status/1101596592426151937)?

- Do you need HTTPS certificate? Use "[Let's Encrypt](https://letsencrypt.org/)" or just buy it from CA company.

- Do you need DNS server? Can't set up your own server? Then how about [Dyn.com](https://dyn.com/dns/), [Hurricane Electric Free DNS](https://dns.he.net/) or [this](https://freedns.afraid.org/)?

- Looking for hosting service? "Free" only? Well, [how about this](https://www.reddit.com/r/webdev/comments/5m8tr4/how_do_i_host_the_website_i_just_built/dc1qpk7/)?

- Are you using "cloudflare-ipfs.com"? Do you know [Cloudflare IPFS is bad](https://ieji.de/@crimeflare/101779952797884218)?

- Install Web Application Firewall (such as OWASP) and Fail2Ban on _your_ server and configure it _properly_.

- If you want to know more alternative solutions, take a look at [this blog's "Alternative solutions" section](http://www.unixsheikh.com/articles/stay-away-from-cloudflare.html).

- Redirect or block "_Cloudflare Warp_" users from accessing your website. And provide a reason if you can.

> IP list is from "[Cloudflare’s current IP ranges](https://www.cloudflare.com/ips/)" webpage. They might lie, so check your server logs too.

> Method A: Just block

```
server {
...
deny 173.245.48.0/20;
deny 103.21.244.0/22;
deny 103.22.200.0/22;
deny 103.31.4.0/22;
deny 141.101.64.0/18;
deny 108.162.192.0/18;
deny 190.93.240.0/20;
deny 188.114.96.0/20;
deny 197.234.240.0/22;
deny 198.41.128.0/17;
deny 162.158.0.0/15;
deny 104.16.0.0/12;
deny 172.64.0.0/13;
deny 131.0.72.0/22;
deny 2400:cb00::/32;
deny 2606:4700::/32;
deny 2803:f800::/32;
deny 2405:b500::/32;
deny 2405:8100::/32;
deny 2a06:98c0::/29;
deny 2c0f:f248::/32;
...
}
```

> Method B: Redirect to warning page

```
http {
...
geo $iscf {
default 0;
173.245.48.0/20 1;
103.21.244.0/22 1;
103.22.200.0/22 1;
103.31.4.0/22 1;
141.101.64.0/18 1;
108.162.192.0/18 1;
190.93.240.0/20 1;
188.114.96.0/20 1;
197.234.240.0/22 1;
198.41.128.0/17 1;
162.158.0.0/15 1;
104.16.0.0/12 1;
172.64.0.0/13 1;
131.0.72.0/22 1;
2400:cb00::/32 1;
2606:4700::/32 1;
2803:f800::/32 1;
2405:b500::/32 1;
2405:8100::/32 1;
2a06:98c0::/29 1;
2c0f:f248::/32 1;
}
...
}

server {
...
if ($iscf) {rewrite ^ https://example.com/cfwsorry.php;}
...
}


[ code cfwsorry.php ]

<?php
header('HTTP/1.1 406 Not Acceptable');
echo <<<CLOUDFLARED
Thank you for visiting ourwebsite.com!
We are sorry, but we can't serve you because your connection is being intercepted by Cloudflare.
Please read https://notabug.org/themusicgod1/cloudflare-tor/ for more information.
CLOUDFLARED;
die();
```

- Set up [Tor Onion Service](https://www.torproject.org/docs/onion-services.html.en) or I2P insite if you believe in freedom and welcome anonymous users.

- Ask for advice from other [Clearnet/Tor dual website operators](https://trac.torproject.org/projects/tor/wiki/org/projects/WeSupportTor) and make anonymous friends! :)

------------

######  Software user

- If you use Debian GNU/Linux, or any derivative, subscribe to [bug #831835](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=831835). And if you can, help verify the patch, and help the maintainer come to the right conclusion on whether it should be accepted.

- Always recommend [Tor Browser](https://www.torproject.org/) for desktop and [Tor Browser for Android](https://play.google.com/store/apps/details?id=org.torproject.torbrowser_alpha)~~, [Orfox](https://guardianproject.info/apps/orfox/)~~ for smartphone. Other software's privacy is imperfect. This doesn't mean Tor browser is "perfect". There is no 100% secure nor 100% private on the internet and technology.

- Don't want to use "Tor"? You can use Tor Browser without Tor, and this is the best option for you.

> **How?**
> 1. Download [Tor Browser](https://www.torproject.org/) and launch it.
> 2. Open Add-ons Manager (about:addons) and *disable* EVERYTHING but "*Torbutton*". **Do NOT *remove* them**.
> 3. Open about:config and search "*extensions.torbutton.use_nontor_proxy*". Set it to "*true*".
> 4. Go to Options, scroll down to "*Network Proxy*". Click "*Settings*" and select "*No proxy*".
> 5. Close Tor Browser.
> 
> Other guide is [here](https://www.whonix.org/wiki/Tor_Browser_without_Tor#Disabling_Tor).


Let's talk about _other software's privacy_...

- If you really need to use Firefox, pick "[Firefox ESR](https://www.mozilla.org/en-US/firefox/organizations/)". ESR is developed for company and organizations, thus _some_ spyware code is disabled by default. Portable version is [here](https://portableapps.com/apps/internet/firefox-portable-esr).

- Remember, Mozilla is [using Cloudflare service](https://www.robtex.com/dns-lookup/www.mozilla.org). They're also using [Cloudflare's DNS service on their product](https://www.theregister.co.uk/2018/03/21/mozilla_testing_dns_encryption/) D'oh!

- Mozilla officially [rejected this ticket](https://bugzilla.mozilla.org/show_bug.cgi?id=1426618).

- PaleMoon developer [loves Cloudflare](https://github.com/mozilla-mobile/focus-android/issues/1743#issuecomment-345993097).

- Waterfox actively using [Cloudflare on their servers](https://www.digwebinterface.com/?hostnames=www.waterfoxproject.org&type=A&ns=resolver&useresolver=8.8.4.4&nameservers=) and their software have [severe "phones home" problem](https://spyware.neocities.org/articles/waterfox.html).

- Chrome is a [spyware](https://www.gnu.org/proprietary/malware-google.en.html).

- SRWare Iron make too many [phones home connection](https://spyware.neocities.org/articles/iron.html). It also connect to google domains.

- Brave Browser [whitelist Facebook/Twitter trackers](https://www.bleepingcomputer.com/news/security/facebook-twitter-trackers-whitelisted-by-brave-browser/). Here's [more issues](https://spyware.neocities.org/articles/brave.html).

- Microsoft Edge lets Facebook [run Flash code behind users' backs](https://www.zdnet.com/article/microsoft-edge-lets-facebook-run-flash-code-behind-users-backs/).

- Vivaldi [does not respect your privacy](https://spyware.neocities.org/articles/vivaldi.html).

Therefore we recommend "Tor Browser" only. Nothing else.

------------

###### "Mozilla Firefox" user

- Don't use Firefox Nightly. It will send debug-level information to Mozilla servers without opt-out method. Mozilla servers are [behing Cloudflare](https://www.digwebinterface.com/?hostnames=www.mozilla.org%0D%0Amozilla.cloudflare-dns.com&type=&ns=resolver&useresolver=8.8.4.4&nameservers=).

- It is possible to prohibit Firefox to connect to Mozilla servers. Create a file "/distribution/policies.json". Mozilla's [policy-templates guide](https://github.com/mozilla/policy-templates/blob/master/README.md). Keep in mind this trick might stop working in later version because Mozilla likes to whitelist themselves. Use firewall and DNS filter to block them completely.

>     "WebsiteFilter": {
> 		"Block": [
> 		"*://*.mozilla.com/*",
> 		"*://*.mozilla.net/*",
> 		"*://*.mozilla.org/*",
> 		"*://*.firefox.com/*",
> 		"*://*.thunderbird.net/*",
> 		"*://*.cloudflare.com/*"
> 		]
>     },


- ~~Report a bug on mozilla's tracker, telling them not to use Cloudflare/TRR.~~ There was a bug report on bugzilla. Many people were posted their concern, however the bug was hidden by the admin last year.

- To disable DOH, enter *about:config?filter=network.trr* in the address bar then set "*network.trr.mode*" to 5 to completely disable it. The value "5" [means "Off by choice"](https://gist.github.com/bagder/5e29101079e9ac78920ba2fc718aceec).

![](image/firefoxdns.jpg)

- If you would like to use non-ISP DNS, consider using [OpenNIC Tier2 DNS service](https://wiki.opennic.org/start)
![](image/opennic.jpg) or any of non-Cloudflare DNS services.

- You can use Tor as DNS resolver. If you're not Tor expert, [ask question here](https://tor.stackexchange.com/).

> **How?**
> 1. Download [Tor](https://www.torproject.org/) and install it on your computer.
> 2. Add this line to "torrc" file. [DNSPort description](https://www.torproject.org/docs/tor-manual.html.en).
> DNSPort 127.0.0.1:53
> 3. Restart Tor.
> 4. Set your computer's DNS server to "127.0.0.1".

- Tell us if you see [this functionality](https://ungleich.ch/en-us/cms/blog/2018/08/04/mozillas-new-dns-resolution-is-dangerous/) start to creep up beyond Firefox Nightly into more stable versions of Firefox.

------------

######  Action

- Tell others around you about the dangers of Cloudflare. But don't talk with NSA employee; you'll be _definitely_ marked... just kidding!

- Help improve this repository, both the lists, the arguments against it and the details.

- Document and make very public where things go wrong with Cloudflare (and similar companies), making sure to mention this repository when you do so ;)

- Get more people using Tor by default so they can experience the web from the perspective of different parts of the world.

- Start groups, in social media and meatspace, dedicated to liberating the world from Cloudflare.

- Where appropriate, link to these groups on this repository - this can be a place for coordinating working together as groups.

- Start a coop that can provide a meaningful non corporate alternative to Cloudflare.

- Let us know of any alternatives to help at least provide multiple layered defence against Cloudflare.

- If you are a Cloudflare customer, set your privacy settings, and wait for them to violate them.  Then bring them under [anti-spam / privacy violation charges](https://twitter.com/thexpaw/status/1108424723233419264).

- Try using [globalist](globalist.txt) to maintain this list.

- If you are in the **United States of America** and the website in question is a bank or an accountant, try to bring legal pressure under the [Gramm–Leach–Bliley Act](https://en.wikipedia.org/wiki/Gramm%E2%80%93Leach%E2%80%93Bliley_Act), or the [Americans with DIsabilities Act](https://www.ada.gov/cguide.htm) and report back to us how far you get. 

- If the website is a government site, try to bring legal pressure under the [1st Amendment of the US Constitution](https://en.wikipedia.org/wiki/First_Amendment_to_the_United_States_Constitution).

- If you are EU citizen, contact the website to send your personal information under the [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation). If they refuse to give you your information, that's a violation of the law.

- For companies that claim to _offer service on their website_ try reporting them as "_false advertising_" to consumer protection organizations and BBB. Cloudflare websites are served by Cloudflare servers.

- The [ITU](https://www.itu.int/en/ITU-T/Workshops-and-Seminars/20181218/Documents/Geoff_Huston_Presentation.pdf) suggest in the US context that Cloudflare is starting to get big enough that antitrust law might be brought down upon them.

- It's conceivable that the GNU GPL v4 could include a provision against storing source code behind such a service, requiring for all GPLv4 and later programs that at least the source code is accessible via a medium that does not discriminate against tor users (or any other class of users or something?)

------------

### Now, what did you do today?


![](image/stopcf.jpg)