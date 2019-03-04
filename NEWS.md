*2019.03.03*

```
"I can't visit Army.mill and Archive Today with Cloudflare DNS.
It returns zero results when DNS querying for Archive Today or any domains under *.mil"
```

https://twitter.com/wongmjane/status/1102446734993551360

Let's test: https://www.digwebinterface.com/?hostnames=www.army.mil%0D%0Aarchive.today%0D%0Aarchive.is&type=A&useresolver=8.8.4.4&ns=self&nameservers=1.1.1.1%0D%0A8.8.8.8

Yeah.

```
archive.today@1.1.1.1 (CloudFlare):   [Copy results to clipboard]
(None)
archive.today@8.8.8.8 (Google):   [Copy results to clipboard]
archive.today.		299	IN	A	46.17.42.43
```

Stay away from centralized service. (Google DNS/Cloudflare DNS)

Why not use OpenNIC?

https://www.opennic.org/


*2019.03.02*

"client was trying to make session requests to their API servers
but before I can prevent it, cloudflare had me blocked.
It's pretty bad as half the internet is behind Cloudflare."

https://twitter.com/Skyfusion89/status/1101596592426151937

*2019.02.27*

* Cloudflare XSS bypass
https://twitter.com/ameenmaali/status/1100536056372490241

*2019.02.26*

Take a look at Cloudflare's transparency report, "Some things we have never done" section.

```
Cloudflare has never terminated a customer or taken down content due to political pressure.*
```

If you're using SumatraPDF, you won't notice * is a link to https://www.cloudflare.com/cloudflare-criticism/ .
Apparently they've terminated a political account.
Do you think it's okay to make a false statement and hide a link to tiny asterisk?

https://twitter.com/mattskala/status/1100479615389159424
https://mstdn.io/@mattskala/101660051818948847

*2019.02.24*

```
"Sites that respect their visitors do not resort to Cloudflare."
"In some cases, for particular countries, having all traffic visible
to the U.S.A can be a matter of life and death."
```
http://techrights.org/2019/02/17/the-cloudflare-trap/

*2019.02.21*

* CF defaults to HTTP connections for its customers
https://g0v.social/@sheogorath/101404226960335320

*2019.02.14*

* "New Ranking Factor: MITMed or not"
https://searxes.danwin1210.me/

*2019.02.08*

* well written post, along with some causes for action in privacytools.io
https://github.com/privacytoolsIO/privacytools.io/issues/374#issuecomment-460077544

* another privacytools.io thread
https://github.com/privacytoolsIO/privacytools.io/issues/711

* Cryptome on CF's ability to deanonymize (2016)
https://cryptome.org/2016/07/cloudflare-de-anons-tor.htm

* bug report issued in wire webapp
https://github.com/wireapp/wire-webapp/issues/5716

*2019.02.01*

* The global internet is rotting from within, and 

"In a not-so-distant future, if we're not there already, it may be that if you're
going to put content on the Internet you'll need to use a company with a giant
network like Cloudflare, Google, Microsoft, Facebook, Amazon, or Alibaba."

Net neutrality is but a skirmish in this larger struggle for control to monopolize all global digital communications.
https://www.itu.int/en/ITU-T/Workshops-and-Seminars/20181218/Documents/Geoff_Huston_Presentation.pdf

*2018.12.10*

* "like this page on NSA/Facebook & allow Facebook to track you to prove you're a human being"
https://niu.moe/@jeffcliff/101220470739320859


*2018.11.12*

* Cloudflare's permissions for DNS are...sketchy
https://weeaboo.space/objects/323a4b45-6e40-44f0-9108-77245638df7e

* AV Updates blocked by cloudflare - "how to proceed?"
http://forums.clamwin.com/viewtopic.php?t=4915
http://lists.clamav.net/pipermail/clamav-users/2018-November/thread.html


