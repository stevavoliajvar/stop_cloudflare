# Instructions
--------------

## Website is using Cloudflare

| List name | Description |
| -------- | -------- |
| cloudflare_CIDR_v4.txt     | Cloudflare IP Range (IPv4)     |
| cloudflare_CIDR_v6.txt     | Cloudflare IP Range (IPv6)     |
| cloudflare_range_v4.txt | range of cloudflare_CIDR_v4 |
| /split/cloudflare(X).txt     | split files     |
| cloudflare_owned_domains.txt     | Domains owned by Cloudflare     |
| cloudflare_owned_onions.txt     | Tor .onions owned by Cloudflare     |
| cloudflare_owned_ASN.txt     | AS network owned by Cloudflare    |
| ex_cloudflare_users.txt     | Domains which used Cloudflare in the past, not any more     |


1) How to detect Cloudflare

- [These add-ons](what-to-do.md) will help your Cloudflare collection.
- Visit a website via Tor or VPN, and you will be greeted by "Attention Required! Cloudflare" webpage.

2) How to add your data

1. Log in to *notabug.org*.
2. Click "*Fork*" button. (top-left corner)
3. Edit text file.
4. Click *Double-arrow* button to create a *new pull request*.

```
IMPORTANT: Please add only "Base Domain"

    if "community.example.com" is using Cloudflare
        add "example.com"

    if "www.example.co.uk" is using Cloudflare
        add "example.co.uk"

    if "example.net" is using Cloudflare
        add "example.net"

... to /split/cloudflare_e.txt
```

3) If the website *no longer using Cloudflare*, *remove* it from /split/ list and *add* to "[ex_cloudflare_users.txt](https://notabug.org/themusicgod1/cloudflare-tor/src/master/ex_cloudflare_users.txt)".


--------------

## Website is NOT using Cloudflare (& blocking you)

Some websites use other companies with the CloudFlare business model.

Add them to [non-cloudflare-list](https://notabug.org/themusicgod1/non-cloudflare-tor-hostile/) (formerly "*TorBlocker Hall of Shame Part I*")

This is a collection of websites that ban Tor exits, other than through Cloudflare(e.g. showing access denied pages, systematic timing out connections, ...).
