# Instructions
--------------

## Website is using Cloudflare

| List name | Description |
| -------- | -------- |
| /split/cloudflare(X).txt     | Split files (base domain)     |
| ex_cloudflare_users.txt     | Domains which used Cloudflare in the past, not anymore     |
| cloudflare_CIDR_v4.txt     | IPv4 CIDR owned by Cloudflare     |
| cloudflare_CIDR_v6.txt     | IPv6 CIDR owned by Cloudflare     |
| cloudflare_range_v4.txt | IPv4 range owned by Cloudflare |
| cloudflare_owned_ASN.txt     | AS network owned by Cloudflare    |
| cloudflare_owned_NS.txt     | Name Server owned by Cloudflare    |
| cloudflare_owned_domains.txt     | Domains owned by Cloudflare     |
| cloudflare_owned_onions.txt     | Tor .onions owned by Cloudflare     |


1) How to detect Cloudflare

There are many ways to detect it:

- [These add-ons](what-to-do.md) will help your Cloudflare collection.
- Visit a website via Tor or VPN, and you will be greeted by "Attention Required! Cloudflare" webpage.
- Dig "[NS record](https://www.digwebinterface.com/?hostnames=emsisoft.com&type=NS&ns=resolver&useresolver=8.8.4.4&nameservers=)" of the domain.

```
emsisoft.com.		21599	IN	NS	bella.ns.cloudflare.com.
emsisoft.com.		21599	IN	NS	dom.ns.cloudflare.com.
```

- Dig "[A record](https://www.digwebinterface.com/?hostnames=dev.qubes-os.org&type=A&ns=resolver&useresolver=8.8.4.4&nameservers=)" of the FQDN, then [check the IP's owner](https://ipinfo.io/104.18.228.122).

```
dev.qubes-os.org.	299	IN	A	104.18.228.122

ASN AS13335 Cloudflare, Inc.
Organization Cloudflare, Inc.
Route 104.18.224.0/20
```

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

| List name | Description |
| -------- | -------- |
| list_error403.txt     | Returns HTTP Error 403 (Forbidden)     |
| list_customerror.txt     | Returns custom error message (not HTTP 403)     |
| list_other.txt     | (not necessary?)    |


Some websites use other companies with the CloudFlare business model.

Add them to [/not_cloudflare/](not_cloudflare/) (formerly "*TorBlocker Hall of Shame Part I*")

This is a collection of websites that ban Tor exits, other than through Cloudflare(e.g. showing access denied pages, systematic timing out connections, ...).
