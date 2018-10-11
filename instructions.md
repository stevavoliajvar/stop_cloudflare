## Instructions for pull requests


| List name | Description |
| -------- | -------- |
| cloudflare_CIDR_v4.txt     | Cloudflare IP Range (IPv4)     |
| cloudflare_CIDR_v6.txt     | Cloudflare IP Range (IPv6)     |
| cloudflare_domains.txt     | The list of cloudflare-proxied domains (without cloudflare_owned_domains)     |
| /split/cloudflare(X).txt     | split files     |
| cloudflare_owned_domains.txt     | Domains owned by Cloudflare     |
| cloudflare_owned_onions.txt     | Tor .onions owned by Cloudflare     |
| cloudflare_owned_ASN.txt     | AS network owned by Cloudflare    |
| ex_cloudflare_users.txt     | Domains which used Cloudflare in the past, not any more     |


1) How to detect Cloudflare

- [These add-ons](what-to-do.md) will help your Cloudflare collection.
- Visit a website via Tor or VPN, and you will be greeted by "Attention Required! Cloudflare" webpage.

2) How to add your data

1. Log in to notabug.org.
2. Click "Fork" button. (top-left corner)
3. Edit text file.
4. Click Double-arrow button to create a new pull request.



*( below could use some rewrite )*

```

2) Some sites use custom page CloudFlare unit.
The only way to detect it is to find CloudFlare JavaScript, or Ray ID as a CAPTCHA in its source code.


3) Some websites use other companies with the CloudFlare business model

add them to non-cloudflare-list.txt ( formerly TorBlocker Hall of Shame Part I)

This is a collection of websites that ban Tor exits, other than through Cloudflare (e.g. showing access denied pages, systematic timing out connections, ...).

(See #6 for format)


4) Find a website that has been removed from Cloudflare(possibly due to our
protest?)  Remove it from the list it is on and add it to ex-cloudflare-tor.txt

However!  Please sample different exits before doing this.  It might have
merely whitelisted a single exit node.  ( It is slightly more difficult to
control which exit you use - if there are tickets in bug trackers to
enable making this easier please mention them here )

(See #6 for format)

5) Find a website that outright blocks tor users and is confirmed Cloudflare?

Add to cloudflare-tor-hostile-list.txt

(See #6 for format)


6) List format:

(A domain should only ever be on one of the lists on this project.  If you find
it on two, please help keep list accurate by removing it from one of the two
lists.)

   {base domain} [<- elegant comment (s) ] [ tags ] 
 
Tags:

( helpful to group sites, if we assume that this project is aimed to the black list to make any actions that get results. 
For example, free software projects w / ClownFucked web pages can be viewed similarly by "anti-function" tags on various free software directories )

    * NEEDSREVIEWp = someone should review the comments/go to this website and report back to us

    * FLOSSp = free libre software project with open source

    * CFA(action) = action is one of "boycott", "discouragedonations", "petition", "legalaction" followed by a URL if possible

    * INSTANTp = service denial is instant/deferred
 
    * COMMERCIALp(type) = type is one of "true", "false"


```
