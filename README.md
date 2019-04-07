# The Great Cloudwall

"The Great Cloudwall" is [CloudFlare](https://www.cloudflare.com/), the world's [largest](https://w3techs.com/technologies/history_overview/proxy) MITM proxy([reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)).

![](image/cloudflaredearuser.png)

It is called this in reference to the [Great Firewall of China](https://www.comparitech.com/privacy-security-tools/blockedinchina/) which does a comparable job of filtering out *some* people from seeing web content(ie everyone in mainland china and some people outside) while at the same time those not affected to see a dratically different web, a web free of censorship of such images as ["tank man"](https://en.wikipedia.org/wiki/Tank_Man).

![](image/onemorestep.jpg)

Cloudflare similarly prevents those in southeast asia and elsewhere who have poor internet connectivity from accessing the websites behind it(for example, they could be behind 7+ layers of NAT) unless they solve multiple image CAPTCHAs. Cloudflare also has a massive [harassment problem](https://web.archive.org/web/20171024040313/http://www.businessinsider.com/cloudflare-ceo-suggests-people-who-report-online-abuse-use-fake-names-2017-5). [Tor users](https://www.torproject.org/) and [VPN users](https://airvpn.org/topic/23090-cloudflare-often-bans-my-ip-address/) are a victim.

![](image/banvpn.jpg)

And their DNS service, [1.1.1.1](https://1.1.1.1/), is also filtering out users from visiting the website by returning fake IP address owned by Cloudflare or just return nothing. See NEWS.md for more information.

![](image/dnscensor.jpg)

And here you might think, "_I am not using Tor or VPN, why should I care?_".
If you visit website which use Cloudflare, you are sharing your information not only to website owner _but also Cloudflare_.
It is impossible to analyze without [decrypting TLS traffic](https://github.com/nym-zone/block_cloudflare_mitm_fx/issues/15#issuecomment-354773389). Cloudflare knows all your data such as raw password.
[Cloudbeed](https://en.wikipedia.org/wiki/Cloudbleed) can happen anytime.
Do you really want to share your data with Cloudflare, and also 3-letter agency?

![](image/dhssaid.jpg)


Cloudflare also offer FREE VPN service called "[Cloudflare Warp](https://blog.cloudflare.com/1111-warp-better-vpn/)". If you use it, all your smartphone connections are sent to Cloudflare servers. Cloudflare can know which website you've read, talked with who, etc. You are voluntary giving your information to Cloudflare. If you think "_Are you joking? Cloudflare is secure._" then you need to learn how [VPN works](https://en.wikipedia.org/wiki/VPN).

## Cloudflare is a honeypot. Cloudflared websites are dangerous.

---

This repository is a list of websites that are behind The Great Cloudwall, and also actively blocking Tor users.


Domain list
* [Domains using Cloudflare](split/)
* [Non-Cloudflare but filtering/blocking Tor users](not_cloudflare/)

Information
* [Padlock icon indicates a secure SSL connection established w MitM-ed](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=831835) by Anonymous
* [Block Global Active Adversary Cloudflare](https://trac.torproject.org/projects/tor/ticket/24351) by nym-zone
* [Problem with CloudFlare](https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-460077544) by libBletchley
* [Criticism and controversies](https://en.wikipedia.org/wiki/Cloudflare#Criticism_and_controversies) by Wikipedia
* [Cloudflare's Advertisement is just wrong](https://notabug.org/themusicgod1/cloudflare-tor/issues/123)


There are more details of why what they are doing is wrong available [here](cloudflare-philosophy.md).
Also see [Frequently Asked Questions](faq.md).


![What did YOU do to stop CF?](image/stopcf.jpg)

# What can you do?

* Read [our list of recommended actions](what-to-do.md) and share it with your friends
* Read [other user's voice](PEOPLE.md) (if you write a blog, tell us your URL)
* Update the domain list: [List instructions](instructions.md)
* Add WTF-Cloudflare news to [NEWS.md](NEWS.md)
* Search something on [Searxes Tor](http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/) or [clearnet](https://searxes.danwin1210.me/) (this will help collecting Searxes' "MITM domains")
* Take a look at [add-on code](ismitmlink/) (how to use "MITM test API")
* Subscribe to ![](image/feed.png) RSS feed: "[The Great Cloudwall News](https://ieji.de/users/crimeflare.rss)" or follow ![](image/mstdn.jpg) [crimeflare@ieji.de](https://ieji.de/@crimeflare)


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
