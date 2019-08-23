# Instructions
--------------

## Website is using Cloudflare

**Cloudflare users** | [**List Directory**](cloudflare_users/)

| List name | Description |
| -------- | -------- |
| **/domain/cloudflare_?.txt**     | **Split files (base domain)**     |
| ex_cloudflare_users.txt     | Domains which used Cloudflare in the past, not anymore     |
| cloudflare_supporter.txt | who is using Cloudflare or endorsing Cloudflare. (URL only) |


**Cloudflare Corporation** | [**List Directory**](cloudflare_inc/)

| List name | Description |
| -------- | -------- |
| cloudflare_CIDR_v4.txt     | IPv4 CIDR owned by Cloudflare     |
| cloudflare_CIDR_v6.txt     | IPv6 CIDR owned by Cloudflare     |
| cloudflare_range_v4.txt | IPv4 range owned by Cloudflare |
| cloudflare_owned_ASN.txt     | AS network owned by Cloudflare    |
| cloudflare_owned_NS.txt     | Name Server owned by Cloudflare    |
| cloudflare_owned_domains.txt     | Domains owned by Cloudflare     |
| cloudflare_owned_onions.txt     | Tor .onions owned by Cloudflare     |
| cloudflare_members.txt | Cloudflare employer & employee |


1) How to detect Cloudflare

There are many ways to detect it:

- [These add-ons](what-to-do.md) will help your Cloudflare collection.
- Visit a website via Tor or VPN, and you will be greeted by "Attention Required! Cloudflare" webpage.
- Use "[Is MITM?](https://searxes.eu.org/collab/sxes/tool_ismitm.php)" webpage.
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


2) How to add your data (A or B)

Type A: Push to Codeberg.org

1. Log in to *Codeberg.org*.
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

Type B: Use "[Is MITM?](https://searxes.eu.org/collab/sxes/tool_ismitm.php)" webpage. Just scan the FQDN.


3) If the website *no longer using Cloudflare*, *remove* it from /split/ list and *add* to "[ex_cloudflare_users.txt](cloudflare_users/ex_cloudflare_users.txt)".


--------------

## Website is NOT using Cloudflare (& blocking you)

**Anti-Tor users** (formerly "*TorBlocker Hall of Shame Part I*") | [**List Directory**](not_cloudflare/)

| List name | Description |
| -------- | -------- |
| **/cidr_data/?.txt**     |  **other CDN IPv4 CIDR files**    |
| **list_othercdn_domain.txt** | **domains behind these CDN (Not Cloudflare)** |
| list_http_error.txt           | Websites that instantly and unconditionally deny service to Tor visitors by returning an HTTP error.  HTTP 403 is the most common but this list catalogs all HTTP responses that entail DoS (i.e. not HTTP 200).  File format is: &lt;FQDN&gt; &lt;http error code&gt; |
| list_customerror.txt          | Custom error message renders for Tor visitors generally without HTTP error. |
| list_other.txt                | Any other form of tor-hostility or mistreatment.  This includes sites somewhat functional for Tor users to some extent but sneaky and unexpected adverse retalitory actions are taken against Tor visitors. |
| list_formerly_tor-hostile.txt | _was_ previously on one of the above tor-hostile lists |

![](image/siteground.jpg)

Above is how Siteground-hosted(INAP) sites often appear to Tor visitors when timeouts/tarpitting doesn't occur.
If you see this please update `list_othercdn_domain.txt`. (CDN ID: Z7)

```
list_othercdn_domain.txt


{domain} {CDN code}

{CDN code}:
'amazon.txt':'Z1'
'akamai.txt':'Z2'
'imperva.txt':'Z4'
'google.txt':'Z5'
'microsoft.txt':'Z6'
'inap.txt':'Z7'
'sucuri.txt':'Z8'
```

```
IMPORTANT: Please add only "FQDN" or "FQDN[space](comment here)"

    if "community.example.com" is blocking Tor
        add "community.example.com"

    if "example.co.uk" is blocking Tor
        add "example.co.uk Error message: Anonymous not allowed"
```

Some websites use other companies with the CloudFlare business model.

This is a collection of websites that ban Tor exits, other than through Cloudflare(e.g. showing access denied pages, systematic timing out connections, ...).

[Add-on "whyrejectme"](README.md#what-can-you-do) will help your `list_http_error.txt` collection.

---

Information:

- [How to setup git](instructions_git.md)
