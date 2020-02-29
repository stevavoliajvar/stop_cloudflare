# The Great Cloudwall

![](image/itsreallythatbad.jpg)
![](image/telegram/c81238387627b4bfd3dcd60f56d41626.jpg)

---


## No Cloudflare


"The Great Cloudwall" is [Cloudflare Inc.](https://www.cloudflare.com/), the [U.S. company](https://en.wikipedia.org/wiki/Cloudflare).
It is the [world's](https://almanac.httparchive.org/en/2019/cdn) [largest](https://w3techs.com/technologies/history_overview/proxy) MITM proxy([reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)).
It sits between you and origin webserver, acting like a [border patrol agent](https://www.cbp.gov/careers/bpa).
The origin webserver administrator allowed the agent to decide [who can access](https://gitlab.com/iblech/tor-appeal/issues/1) to their "_web property_" and define "_restricted area_".

---

![](image/cfmarketshare.jpg)
![](image/cloudflaredearuser.jpg)
![](image/usershoulddecide.jpg)

---

Take a look at the first image posted below. You will think Cloudflare block _only_ attackers. You will think _Cloudflare is always online(never go [down](https://twitter.com/bengoldacre/status/1146058200887648258))_. However [it is not true](PEOPLE.md).

---

![](image/howcfwork.jpg)
![](image/cfdowncfcom.jpg)
![](image/cfdown2019.jpg)
![](image/cloudflareinternalerror.jpg)

---

It is called this in reference to the [Great Firewall of China](https://www.comparitech.com/privacy-security-tools/blockedinchina/) which does a comparable job of [filtering out many humans](PEOPLE.md) from seeing web content (ie everyone in mainland China and people outside) while at the same time those not affected to see a dratically different web, a web free of censorship such as an image of ["tank man"](https://en.wikipedia.org/wiki/Tank_Man) and the history of ["Tiananmen Square protests"](https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests#Censorship_in_China). 

Cloudflare also [automatically](https://twitter.com/itsybitsydots/status/1212691131508477952) [block](PEOPLE.md) legit robots/crawlers such as Google, Yandex, Yacy, and API clients.

---

![](image/cloudflarechina.jpg)
![](image/onemorestep.jpg)
![](image/accdenied.jpg)
![](image/cfublock.jpg)
![](image/omsjsck.jpg)
![](image/cftestgoogle.jpg)

---

Cloudflare similarly prevents many people who have poor internet connectivity from accessing the websites behind it (for example, they could be behind 7+ layers of NAT or sharing same IP) unless they solve multiple image CAPTCHAs. In some cases, [this will take 10 to 30 minutes to satisfy Google](https://trac.torproject.org/projects/tor/ticket/23840). Many humans are being blocked by Cloudflare [every day](PEOPLE.md). There is no way to solve the captcha without enabling Javascript and Cookies. Cloudflare is [using them](PEOPLE.md) to make a browser signature.

---

![](image/googlerecaptcha.jpg)
![](image/omsnote.jpg)
![](image/omsdroid.jpg)
![](image/omsstream.jpg)
![](image/omsappl.jpg)
![](image/cferr1010bsig.jpg)

---

[Tor users](https://www.torproject.org/) and [VPN users](https://airvpn.org/topic/23090-cloudflare-often-bans-my-ip-address/) are also a [victim](https://blog.torproject.org/trouble-cloudflare) of Cloudflare. If you didn't try Tor until this moment, we encourage you to [download Tor Browser](https://www.torproject.org/) and visit your favorite websites. (advice: _Do not login to your bank website or government webpage or they will flag your account. [Use VPN](https://www.vpngate.net/en/) for those websites._)

You might want to say "_Tor is illegal! Tor is criminal's browser! Tor is bad!_". No.
Tor _was_ developed by US Army, but current Tor is developed by the [Tor project](https://www.torproject.org/). There are many people and organizations who use Tor including your future friends. So, if you are using Cloudflare on your website you are blocking real humans. You will lose potential friendship and business deal.

---

![](image/banvpn2.jpg)
![](image/banvpn.jpg)
![](image/whousetor.jpg)
![](image/iusetor_alith.jpg)

---

And their DNS service, [1.1.1.1](https://1.1.1.1/), is also filtering out users from visiting the website by returning [fake](https://trac.torproject.org/projects/tor/ticket/32915) IP address owned by Cloudflare, localhost IP such as "127.0.0.x", or just return nothing. Cloudflare DNS also [break](https://twitter.com/bowranger/status/1213031783576428550) [online](https://twitter.com/jb510/status/1212521533907668992) [software](https://twitter.com/No_Style/status/1201525422795710466) [from](https://twitter.com/daemuth/status/1187758306535903233) [smartphone](https://twitter.com/gregortorrence/status/1183102089439805441) [app to computer game because of their fake DNS answer](PEOPLE.md).

---

![](image/cferr1016.jpg)
![](image/cferr1016sp.jpg)
![](image/dnsfailtest.jpg)
![](image/cfdnsprob.jpg)

---

And here you might think, "_I am not using Tor or VPN, why should I care?_".
If you visit website which use Cloudflare, you are sharing your information not only to website owner _but also Cloudflare_.
It is impossible to [analyze](https://blog.cloudflare.com/the-csam-scanning-tool/) without [decrypting TLS traffic](https://github.com/nym-zone/block_cloudflare_mitm_fx/issues/15#issuecomment-354773389). Cloudflare knows all your data such as raw password.
[Cloudbeed](https://en.wikipedia.org/wiki/Cloudbleed) can happen anytime.

---

![](image/cfbloghtmledit.jpg)
![](image/cfhelp204144518.jpg)
![](image/cfhelpforum.jpg)
![](image/prism_gfe.jpg)
![](image/sniff2.gif)

---

Do you really want to share your data with Cloudflare, and also 3-letter agency?
Internet user's online profile is a "product" that the government and big tech companies wants to buy.

US [Department of Homeland Security](https://www.dhs.gov/) said:
```
Do you have any idea how valuable the data you have is?
Is there any way you would sell us that data?
```

---

![](image/dhssaid.jpg)
![](image/federalinterest.jpg)
![](image/cfstrengthdata.jpg)

---

Cloudflare also offer _FREE_ VPN service called "[Cloudflare Warp](https://blog.cloudflare.com/1111-warp-better-vpn/)". If you use it, all your smartphone ([or your computer](https://techniapps.com/2019/09/26/download-cloudflare-warp-vpn-for-pc-windows-10-mac/)) connections are sent to Cloudflare servers. Cloudflare can know which website you've read, what comment you've posted, who you've talked to, etc. You are voluntary giving [all your information](https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-478686469) to Cloudflare. If you think "_Are you joking? Cloudflare is secure._" then you need to learn how [VPN works](https://en.wikipedia.org/wiki/VPN).

Cloudflare said their VPN service make your internet [fast](https://www.wired.com/story/cloudflare-says-new-vpn-service-wont-slow-you-down/). But VPN make your internet connection _slower_ than [your](https://twitter.com/ExYakuza/status/1182317536089526273) [existing](https://twitter.com/waddling/status/1177615384616325120) [connection](https://techcrunch.com/2019/04/01/cloudflares-warp-is-a-vpn-that-might-actually-make-your-mobile-connection-better/).

---

![](image/howvpnwork.jpg)
![](image/notfastervpn.jpg)

---

You might already know about the [PRISM](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) scandal. It is true that AT&T lets NSA to [copy all internet data](https://www.cnet.com/news/at-t-lets-nsa-hide-and-surveil-in-plain-sight-the-intercept-reports/) for surveillance. Let's say you're working at the NSA, and you want _every citizen's internet profile_. You know most of them are blindly trusting Cloudflare and using it - only one centralized gateway - to proxy their company server connection([SSH](https://blog.cloudflare.com/public-keys-are-not-enough-for-ssh-security/)/[RDP](https://blog.cloudflare.com/cloudflare-access-now-supports-rdp/)), personal website, chat website, forum website, bank website, insurance website, search engine, secret member-only website, auction website, shopping, video website, NSFW website, and illegal website. You also know they use Cloudflare's DNS service ("_1.1.1.1_") and VPN service ("_Cloudflare Warp_") for "_Secure! Faster! Better!_" internet experience. Combining them with user's IP address, browser fingerprint, cookies and RAY-ID will be useful to build target's online profile. You want their data. [What will you do](https://www.reddit.com/r/privacy/comments/1gb0pa/how_prism_actually_works_1520_att_fiber_optic/)?

---

![](image/prismattnsa.jpg)
![](image/nsaslide_prismcorp.gif)

---

### Cloudflare is a honeypot.

![](image/honeypot.gif)

### Free honey for everyone. _Some_ strings attached.

![](image/iminurtls.jpg)

### Do not use Cloudflare.

![](image/shadycloudflare.jpg)

### Decentralize the internet.

!["Cloudflare is not an option."](image/cfisnotanoption.jpg)

---


## continue to next page:  [Cloudflare Ethics](README_ethics.md)



---

<details>
<summary>_click me_

## Data & More Information
</summary>


This repository is **a list** of websites that are **behind "_The Great Cloudwall_"**, **blocking Tor users** and **other CDNs**.


**Data**
* [Cloudflare Inc.](cloudflare_inc/)
* [Cloudflare Users](cloudflare_users/)
* [Cloudflare Domains](cloudflare_users/domains/)
* [Non-Cloudflare CDN users](not_cloudflare/)
* [Anti-Tor users](anti-tor_users/)

![](image/goodorbad.jpg)


**More Information**
* [Short version of README](README_short.md)  `DRAFT`
* [Myth Catalog](myth_catalog.md)  `DRAFT`
* [The Great Cloudwall](article.txt) by Mr. Jeff Cliff; PDF version [here](pdf/2019-The_Great_Cloudwall.pdf), [ePUB here](pdf/2019-Jeff_Cliff_The_Great_Cloudwall.epub) `DRAFT`
* [Padlock icon indicates a secure SSL connection established w MITM-ed](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=831835) by Anonymous
* [Block Global Active Adversary Cloudflare](https://trac.torproject.org/projects/tor/ticket/24351) by nym-zone
* [Problem with Cloudflare](https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-460077544) by libBletchley
* [Criticism and controversies](https://en.wikipedia.org/wiki/Cloudflare#Criticism_and_controversies) by Wikipedia
* [Cloudflare Watch](http://www.crimeflare.org:82/) (cons: _down quite a lot, old data, search restricted to EU only_)
* [Another landmark day in the war to control, centralize and censor the internet.](https://www.reddit.com/r/privacy/comments/b8dptl/another_landmark_day_in_the_war_to_control/) by TheGoldenGoose8888
* [Disadvantage of relying on only one service](https://twitter.com/w3Nicolas/status/1134529316904153089) ([DO is CF](https://www.digwebinterface.com/?hostnames=ns1.digitalocean.com%0D%0Ans2.digitalocean.com%0D%0Ans3.digitalocean.com%0D%0Awww.digitalocean.com&type=A&ns=resolver&useresolver=8.8.4.4&nameservers=))
* [HashTag #FuckCloudflare on Mastodon Network](https://mastodon.social/tags/fuckcloudflare)

![](image/watcloudflare.jpg)

</details>

---

<details>
<summary>_click me_

## What can you do?
</summary>

* Read [our list of recommended actions](what-to-do.md) and share it with your friends.

* Read [other user's voice](PEOPLE.md) and write your thoughts.

* Search something on [Ansero](http://ansero.xgwglrypkjbgecns2zru5ekyu7tnqgg7l5blojlq7roohxbwkr5k77id.onion/)<sub><sup> [ᶜˡᵉᵃʳⁿᵉᵗ](https://ansero.eu.org/)</sup></sub> or [Searxes](http://searxes.nmqnkngye4ct7bgss4bmv5ca3wpa55yugvxen5kz2bbq67lwy6ps54yd.onion/)<sub><sup> [ᶜˡᵉᵃʳⁿᵉᵗ](https://searxes.eu.org/)</sup></sub>.

* Update the domain list: [List instructions](instructions.md).

* Add Cloudflare or project related event to [history](HISTORY.md).

* Try & write new [Tool / Script](tool/).

* Here's some [PDF](pdf/) to read.

---

### "Stop Cloudflare" Official Accounts

**NEVER** trust other accounts.

* [Mastodon (crimeflare)](https://activism.openworlds.info/@crimeflare)

* [Twitter (stop_cloudflare)](https://twitter.com/stop_cloudflare) ([We don't like Twitter](https://robinwils.gitlab.io/articles/why-i-made-a-twitter/#why-twitter))


> We don't read _direct message_. If you want to say something [join here](https://codeberg.org/crimeflare/cloudflare-tor/issues).

---

![WTF](image/wtfcf.jpg)

![](image/omsirl.jpg)
![](image/whydoihavetosolveacaptcha.jpg)
![](image/fixthedamn.jpg)
![](image/imnotarobot.jpg)

</details>

---


![](image/twe_lb.jpg)

![](image/twe_dz.jpg)

![](image/twe_jb.jpg)

![](image/twe_ial.jpg)

![](image/twe_eptg.jpg)

![What did YOU do to stop CF?](image/stopcf.jpg)

![](image/peopledonotthink.jpg)