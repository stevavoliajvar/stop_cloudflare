# 👋 [_Non-English_ versions](../README.md)

---


# CrimeFlarE

*Why you should say "NO" to Cloudflare*

---


![CrimeFlarE logo](../image/crimeflare-logo.png)

Are you already aware of the problems?
You might want to check:
- [Alternatives](#alternatives)
- [Solutions](#solutions)



## Who are we?

`CrimeFlarE` is a group of volunteer Tor, privacy and net neutrality
enthusiasts working to counter CloudFlare’s oppressive attack on the Tor 
community and reduce the harms CloudFlare brings to all users (Tor users and 
clearnet users).

## Who is Cloudflare?

Cloudflare is the world's largest man-in-the-middle proxy. This means that it 
sits between you and the server which sent you the pages and images.

Cloudflare is a content delivery network, which means that it has different 
servers in different locations, so that websites are supposed to be better 
reachable. This has a bad side.

![](https://codeberg.org/crimeflare/cloudflare-tor/media/branch/master/image/matthew_prince.jpg)


## Why you shouldn't use it
### Privacy problems
#### Single point of failure

Cloudflare goes down from time to time. All the content which uses Cloudflare 
goes down as well when that happens.

Read more about the 
[single point of failure](../subfiles/single-point-of-failure-problem.md).

![](https://codeberg.org/crimeflare/cloudflare-tor/media/branch/master/image/cloudflareoutage-2020.jpg)


#### It removes anonymity

Cloudflare usually blocks Tor or makes it hard for Tor users to access the 
website or content. Tor is not only for criminals. It is important for many 
people and everyone has the right on privacy.

Tor is important, read more about 
[why Tor matters](../subfiles/why-tor-matters.md).

Cloudflare often uses Google reCATPCHAs to check if you are human. These
CAPTCHAs which check if you are human, track you and many claim that they
even try to find out which human you are.

Read more about the
[reCAPTCHA problem](../subfiles/recaptcha-problem.md).


#### Project Honey Pot

Project Honey Pot is a project which collects a lot of personal data
and much of that data is from innocent people who deserve privacy.
Cloudflare was created by people who worked on that project.

![](https://codeberg.org/crimeflare/cloudflare-tor/media/branch/master/image/honeypot.gif)


### Not convenient

Cloudflare is not convenient for many visitors of your site. You will
lose visitors when you choose Cloudflare. Many people who helped writing
this file even block Cloudflare.

Did you know that you can lose visitors because your site doesn't load
in a few seconds?

Cloudflare often makes visitors wait for a few seconds. Many visitors will
leave your site when they see this.

![](https://codeberg.org/crimeflare/cloudflare-tor/media/branch/master/image/onemorestep.jpg)


### Other problems

There are other problems as well, but we want to keep this file simple.
Those problems are listed in
[another file](../subfiles/more-cloudflare-problems.md).


## Alternatives

Do own a website?  
We created a [file with Cloudflare alternatives](../subfiles/cloudflare-alternatives.md)
to make your life easier if you agree with us.


## Solutions
### Blocking Cloudflare request or IPs

- [Add-ons](../what-to-do.md#website-consumer)
- [Cloudflare IPs to block](../cloudflare_inc/)
- [Change default DNS provider of firefox](../subfiles/change-firefox-dns.md)


### Share information about the problem

Many supporters of CrimeFlarE have written some
[articles](../subfiles/articles.md) about the problem.
You can check them out and share them.

You can ask website owners to stop using Cloudflare, please do so in
a polite way. It might be good to mention some [alternatives](#alternatives).

There are more files on this repository to educate yourself.
We haven't included them all in the README to keep it fairly readable.


## Not convinced yet?

Many supporters of CrimeFlarE have written some
[articles](../subfiles/articles.md) about the problem.
You can check them out and share them.

---

Still not convinced?  
That's fine. Just know that many people won't be able to use your content or
website. It works against you.
