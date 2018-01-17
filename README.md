# The Great Cloudwall

The Great Cloudwall is [CloudFlare](https://www.cloudflare.com).  It is called this in reference to the [Great Firewall of China](http://www.greatfirewallofchina.org/) which does a comparable job of filtering out *some* people from seeing web content(ie everyone in mainland china and some people outside) while at the same time those not affected to see a dratically different web, a web free of censorship of such images as ["tank man"](https://en.wikipedia.org/wiki/Tank_Man).  Cloudflare similarly prevents those in southeast asia and elsewhere who have poor internet connectivity from accessing the websites behind it(for example, they could be behind 7+ layers of NAT) unless they solve a CAPTCHA.

This repository is a list of websites that are behind The Great Cloudwall,
websites who human beings have tried to access and have been [either](merely-using-cloudflare.txt) [blocked](cloudflare-list.txt) [from](cloudflare-tor-hostile-list.txt) or [suspect they will be](cloudflare-tor-hostile-list.txt).  Or [Cloudflare's competitors](non-cloudflare-list.txt).

There is more details of why what they are doing is wrong available [here](cloudflare-philosophy.txt).

# What can you do?

* see [list instructions](instructions)

* If you use one of the websites on this list, contact the webmasters if you still can, and tell them not to use Cloudflare.  

* If they can't leave CloudFlare(perhaps they are merely tech support at the website, and management has decreed that Cloudflare MUST be used) get them to exercise option to whitelist Tor without changing to the "basic level of security" within Cloudflare's options.  CloudFlare customers can use this tool(?) to whitelist tor. Advise them, however, that using CloudFlare(or any Cloudflare-like competitors, see [philosophy](cloudflare-philosophy.txt) and [non-cloudflare list](non-cloudflare-list.txt) ) exposes readers/viewers/customers to a giant supplier MitM. This is a questionable practice, regardless of whitelists.

* Tell others around you about the dangers of Cloudflare.  

* Help improve this repository, both the lists, the arguments against it and the details

* Document and make very public where things go wrong with Cloudflare (and similar companies), making sure to mention this repository when you do so

* Get more people using Tor by default so they can experience the web from the perspective of different parts of the world.

* Start groups, in social media and meatspace, dedicated to liberating the world from Cloudflare.

* Where appropriate, link to these groups on this repository - this can be a place for coordinating working together as groups

* Start a coop that can provide a meaningful non corporate alternative to Cloudflare

* let us know of any alternatives to help at least provide multiple layered defence against Cloudflare

There are [other lists](https://github.com/pirate/sites-using-cloudflare), but this one is one where every entry on the list a human being has actually tried
to go to, and has been blocked.
