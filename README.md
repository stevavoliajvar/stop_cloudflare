# The Great Cloudwall

"The Great Cloudwall" is [CloudFlare](https://www.cloudflare.com/).
It is called this in reference to the [Great Firewall of China](http://www.greatfirewallofchina.org/) which does a comparable job of filtering out *some* people from seeing web content(ie everyone in mainland china and some people outside) while at the same time those not affected to see a dratically different web, a web free of censorship of such images as ["tank man"](https://en.wikipedia.org/wiki/Tank_Man).
Cloudflare similarly prevents those in southeast asia and elsewhere who have poor internet connectivity from accessing the websites behind it(for example, they could be behind 7+ layers of NAT) unless they solve multiple image CAPTCHAs.

This repository is a list of websites that are behind The Great Cloudwall, and also actively blocking Tor users.

* [Domains using Cloudflare](cloudflare-list.txt)
* [Hostile to Tor users](cloudflare-tor-hostile-list.txt)
* [Not Cloudflare but other filtering company](non-cloudflare-list.txt)

There are more details of why what they are doing is wrong available [here](cloudflare-philosophy.txt).
Also see [Frequently Asked Questions](FAQ).

# What can you do?

* Add domains you found: [list instructions](instructions)
* See [our list of recommended actions](what-to-do.txt).

There are other lists, but this one is one where every entry on the list a human being has actually tried
to go to, and has been blocked.
Human is not a robot.

* [List of services blocking Tor](https://trac.torproject.org/projects/tor/wiki/org/doc/ListOfServicesBlockingTor) by Tor project contributors
* [Sites using cloudflare](https://github.com/pirate/sites-using-cloudflare) by pirate

WARNING:
Github.com is hostile to Tor users. If you create an account on Github via Tor, your account will be automatically
flagged for spam and will be deleted. See "List of services blocking Tor" for details.

# Who uses this list?

At least one.

* [Searxes](https://searxes.danwin1210.me/) meta-search engine
