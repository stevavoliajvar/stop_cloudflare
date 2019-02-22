# What you can do to resist Cloudflare?

![](image/matthew_prince.jpg)




######  Website consumer

- If the website you like is using Cloudflare, tell them not to use Cloudflare. Example below.

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

An acceptable privacy policy example is [here](https://archive.is/bDlTz) (look at "Subprocessors" -> "Entity Name")

```
I've read your privacy policy and I cannot find the word "Cloudflare".
I refuse to share data with you if you continue to feed my data to Cloudflare.
See https://notabug.org/themusicgod1/cloudflare-tor/src/master/README.md
```

For example, *[Liberland](https://archive.is/daKIr)* [privacy policy](https://docsend.com/view/feiwyte) says:

![](image/cfwontobey.jpg)

... is not going to happen.
Cloudflare have their own "privacy policy", and there's NO WAY to hear customer's privacy policy needs.
Cloudflare [loves doxxing people](https://www.reddit.com/r/GamerGhazi/comments/2s64fe/be_wary_reporting_to_cloudflare/).

Here's a good example for website's privacy policy;

```
By clicking “Sign up for XYZ”, you agree to our terms of service and privacy statement.
**You also agree to share your data with Cloudflare** and also **agrees to cloudflare privacy statement**.
```

AFAIK, **ZERO** website do this. So, *will you trust them*?


- Try not to use their service. Remember you are being watched by Cloudflare.

- Search for other website. There are many alternatives and opportunites on the internet!

- If your browser is Firefox, use one of these add-ons.

| Name | Can Block | Can Notify |
| -------- | -------- | -------- |
| [Block Cloudflare MITM Attack](https://addons.mozilla.org/en-US/firefox/addon/bcma/)     | **Yes**     | **Yes**     |
| [Block Cloudflare MITM Attack](https://trac.torproject.org/projects/tor/attachment/ticket/24351/block_cloudflare_mitm_attack-1.0.14.1-an%2Bfx.xpi)     | **Yes**     | **Yes**     |
| [Are links vulnerable to MITM?](https://addons.mozilla.org/en-US/firefox/addon/are-links-vulnerable-to-mitm/)     | No     | **Yes**     |
| [Third-party Request Blocker (AMO)](https://addons.mozilla.org/en-US/firefox/addon/tprb/)     | **Yes**     | **Yes**     |
| [Third-party Request Blocker](https://searxes.danwin1210.me/collab/___go.php?go=get_tprb0&prf=nab)     | **Yes**     | **Yes**     |
| [Detect Cloudflare](https://addons.mozilla.org/en-US/firefox/addon/detect-cloudflare/)     | No     | **Yes**     |


- Convince your friends to use [Tor Browser](https://www.torproject.org/) on the daily basis. Anonymity should be the standard of the open internet!



######  Website owner / Web developer

- Do not use Cloudflare solution. You are loser if you fall to that easy solution. You can do better than that, right?

- Install Web Application Firewall (such as OWASP) and Fail2Ban on _your_ server and configure it _properly_.

- Set up [Tor Onion Service](https://www.torproject.org/docs/onion-services.html.en) or I2P insite if you believe in freedom and welcome anonymous users.

- Ask for advice from other [Clearnet/Tor dual website operators](https://trac.torproject.org/projects/tor/wiki/org/projects/WeSupportTor) and make anonymous friends! :)



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

- Chrome is a [spyware](https://www.gnu.org/proprietary/malware-google.en.html).

- Brave Browser [whitelist Facebook/Twitter trackers](https://www.bleepingcomputer.com/news/security/facebook-twitter-trackers-whitelisted-by-brave-browser/).

- Microsoft Edge lets Facebook [run Flash code behind users' backs](https://www.zdnet.com/article/microsoft-edge-lets-facebook-run-flash-code-behind-users-backs/).



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

- To disable DOH, enter about:config?filter=network.trr in the address bar then set "network.trr.mode" to 5 to completely disable it. The value "5" [means "Off by choice"](https://gist.github.com/bagder/5e29101079e9ac78920ba2fc718aceec). (If you really need to use non-ISP DNS, consider using [OpenNIC Tier2 DNS service](https://wiki.opennic.org/start).)

- Tell us if you see [this functionality](https://ungleich.ch/en-us/cms/blog/2018/08/04/mozillas-new-dns-resolution-is-dangerous/) start to creep up beyond Firefox Nightly into more stable versions of Firefox.



######  Action

- Tell others around you about the dangers of Cloudflare. But don't talk with NSA employee; you'll be _definitely_ marked... just kidding!

- Help improve this repository, both the lists, the arguments against it and the details.

- Document and make very public where things go wrong with Cloudflare (and similar companies), making sure to mention this repository when you do so

- Get more people using Tor by default so they can experience the web from the perspective of different parts of the world.

- Start groups, in social media and meatspace, dedicated to liberating the world from Cloudflare.

- Where appropriate, link to these groups on this repository - this can be a place for coordinating working together as groups.

- Start a coop that can provide a meaningful non corporate alternative to Cloudflare.

- Let us know of any alternatives to help at least provide multiple layered defence against Cloudflare.

- Try using [globalist](globalist.txt) to maintain this list.

- If you are in the **United States of America** and the website in question is a bank or an accountant, try to bring legal pressure under the [Gramm–Leach–Bliley Act](https://en.wikipedia.org/wiki/Gramm%E2%80%93Leach%E2%80%93Bliley_Act), or the [Americans with DIsabilities Act](https://www.ada.gov/cguide.htm) and report back to us how far you get. 

- If the website is a government site, try to bring legal pressure under the [1st Amendment of the US Constitution](https://en.wikipedia.org/wiki/First_Amendment_to_the_United_States_Constitution).

- If you are EU citizen, contact the website to send your personal information under the [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation). If they refuse to give you your information, that's a violation of the law.

- For companies that claim to _offer service on their website_ try reporting them as "_false advertising_" to consumer protection organizations and BBB. Cloudflare websites are served by Cloudflare servers.

- the [ITU](https://www.itu.int/en/ITU-T/Workshops-and-Seminars/20181218/Documents/Geoff_Huston_Presentation.pdf) suggest in the US context that Cloudflare is starting to get big enough that antitrust law might be brought down upon them.