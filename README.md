# The Great Cloudwall

"The Great Cloudwall" is [CloudFlare](https://www.cloudflare.com/), the world's [largest](https://w3techs.com/technologies/history_overview/proxy) MITM proxy([reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)).
It sits between you and origin webserver, acting like a [border patrol agent](https://www.cbp.gov/careers/bpa).
The origin webserver administrator allowed the agent to decide who can access to their "web property" and define "restricted area".


![](image/cloudflaredearuser.png)
![](image/howcfwork.jpg)


It is called this in reference to the [Great Firewall of China](https://www.comparitech.com/privacy-security-tools/blockedinchina/) which does a comparable job of filtering out many humans from seeing web content (ie everyone in mainland China and people outside) while at the same time those not affected to see a dratically different web, a web free of censorship of such images as ["tank man"](https://en.wikipedia.org/wiki/Tank_Man).


![](image/onemorestep.jpg)
![](image/accdenied.jpg)
![](image/cfublock.jpg)


Cloudflare similarly prevents those in southeast asia and elsewhere who have poor internet connectivity from accessing the websites behind it (for example, they could be behind 7+ layers of NAT or sharing same IP) unless they solve multiple image CAPTCHAs.


![](image/omsnote.jpg)
![](image/omsdroid.jpg)
![](image/omsstream.jpg)
![](image/omsappl.jpg)


[Tor users](https://www.torproject.org/) and [VPN users](https://airvpn.org/topic/23090-cloudflare-often-bans-my-ip-address/) are also a victim. If you didn't try Tor until this moment, we encourage you to [download Tor Browser](https://www.torproject.org/) and visit your favorite websites.


![](image/banvpn.jpg)


Cloudflare also has a massive [harassment problem](https://web.archive.org/web/20171024040313/http://www.businessinsider.com/cloudflare-ceo-suggests-people-who-report-online-abuse-use-fake-names-2017-5).
Cloudflare shares personal information of those who complain about hosted sites. They sometimes ask you to provide
your true ID. If you don't want to get swatted or killed, better stay away from Cloudflare.


![](image/cfdox_swat.jpg)
![](image/cfdox_kill.jpg)


And their DNS service, [1.1.1.1](https://1.1.1.1/), is also filtering out users from visiting the website by returning fake IP address owned by Cloudflare or just return nothing.


![](image/dnscensor.jpg)
![](image/cferr1016.jpg)


And here you might think, "_I am not using Tor or VPN, why should I care?_".
If you visit website which use Cloudflare, you are sharing your information not only to website owner _but also Cloudflare_.
It is impossible to analyze without [decrypting TLS traffic](https://github.com/nym-zone/block_cloudflare_mitm_fx/issues/15#issuecomment-354773389). Cloudflare knows all your data such as raw password.
[Cloudbeed](https://en.wikipedia.org/wiki/Cloudbleed) can happen anytime.
Do you really want to share your data with Cloudflare, and also 3-letter agency?


![](image/cfbloghtmledit.jpg)
![](image/cfhelp204144518.jpg)
![](image/iminurtls.jpg)
![](image/dhssaid.jpg)


Cloudflare also offer _FREE_ VPN service called "[Cloudflare Warp](https://blog.cloudflare.com/1111-warp-better-vpn/)". If you use it, all your smartphone connections are sent to Cloudflare servers. Cloudflare can know which website you've read, what comment you've posted, who you've talked to, etc. You are voluntary giving [all your information](https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-478686469) to Cloudflare. If you think "_Are you joking? Cloudflare is secure._" then you need to learn how [VPN works](https://en.wikipedia.org/wiki/VPN).


![](image/howvpnwork.jpg)


You might already know about the [PRISM](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) scandal. It is true that AT&T lets NSA to [copy all internet data](https://www.cnet.com/news/at-t-lets-nsa-hide-and-surveil-in-plain-sight-the-intercept-reports/) for surveillance. Let's say you're working at the NSA, and you want _every citizen's internet profile_. You know most of them are blindly trusting Cloudflare and using it to proxy their personal website, chat website, forum website, bank website, insurance website, search engine, secret member-only website, auction website, shopping, video website, NSFW website, and illegal website. You also know they use Cloudflare's DNS service ("1.1.1.1") and VPN service ("Cloudflare Warp") for "_Secure! Faster! Better!_" internet experience. Combining them with user's IP address, browser fingerprint, cookies and RAY-ID will be useful to build target's online profile. You want their data. [What will you do](https://www.reddit.com/r/privacy/comments/1gb0pa/how_prism_actually_works_1520_att_fiber_optic/)?


![](image/prismattnsa.jpg)
![](image/prism_gfe.jpg)


### Cloudflare is a honeypot.

### Free honey for everyone. _Some_ strings attached.

### Do not use Cloudflare.

### Decentralize the internet.


!["Cloudflare is not an option."](image/cfisnotanoption.jpg)


---

This repository is a list of websites that are behind The Great Cloudwall, and also actively blocking Tor users.


Domain list  -  mirrors: [NixNet](https://git.nixnet.xyz/Username/cloudflare-tor),  [CodeBerg](https://codeberg.org/Username/cloudflare-tor)
* [Domains using Cloudflare](cloudflare_users/)
* [Non-Cloudflare but filtering/blocking Tor users](not_cloudflare/)

Information
* [Padlock icon indicates a secure SSL connection established w MitM-ed](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=831835) by Anonymous
* [Block Global Active Adversary Cloudflare](https://trac.torproject.org/projects/tor/ticket/24351) by nym-zone
* [Problem with CloudFlare](https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-460077544) by libBletchley
* [Criticism and controversies](https://en.wikipedia.org/wiki/Cloudflare#Criticism_and_controversies) by Wikipedia


There are more details of why what they are doing is wrong available [here](cloudflare-philosophy.md).
Also see [Frequently Asked Questions](faq.md).


# What can you do?

* Read [our list of recommended actions](what-to-do.md) and share it with your friends

* Read [other user's voice](PEOPLE.md) (if you write a blog, tell us your URL)

* Update the domain list: [List instructions](instructions.md)

* Add WTF-Cloudflare news to [NEWS.md](NEWS.md)

* Search something on [Searxes Tor](http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/) or [clearnet](https://searxes.danwin1210.me/) (this will help collecting Searxes' "MITM domains")

* Take a look at add-on code and try it

| Name | Firefox | Chrome |
| -------- | -------- | -------- |
| Block Cloudflare MITM Attack | [Code](addon_firefox/bcma) | [Code](addon_chrome/bcma) |
| Are links vulnerable to MITM? | [Code](addon_firefox/ismitmlink) | [Code](addon_chrome/ismitmlink) |
| Which website rejected me? | [Code](addon_firefox/whyrejectme) | - |

* [Tool / Script](tool/)

* ![](image/feed.png) [RSS feed](https://masto.nixnet.xyz/users/crimeflare.rss),  ![](image/mstdn.jpg) [crimeflare@masto.nixnet.xyz](https://masto.nixnet.xyz/@crimeflare)


![WTF](image/wtfcf.jpg)


There are other lists, but this one is one where every entry on the list a human being has actually tried
to go to, and has been blocked.
Human is not a robot.

* [List of services blocking Tor](https://trac.torproject.org/projects/tor/wiki/org/doc/ListOfServicesBlockingTor) by Tor project contributors
* [Sites using cloudflare](https://github.com/pirate/sites-using-cloudflare) by pirate

WARNING:
Github.com is very hostile to Tor users. If you create an account on Github via Tor, your account will be automatically
flagged for spam and will be deleted. See "List of services blocking Tor" for details.

# Who uses this list?

* [Searxes](https://searxes.danwin1210.me/) meta-search engine
* [Block Cloudflare MITM Attack](https://addons.mozilla.org/en-US/firefox/addon/bcma/) add-on
* Some Firefox Add-ons


![](image/omsirl.jpg)
![](image/whydoihavetosolveacaptcha.jpg)
![](image/fixthedamn.jpg)
![What did YOU do to stop CF?](image/stopcf.jpg)