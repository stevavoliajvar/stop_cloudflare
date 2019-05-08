# Instructions
--------------

## Website is using Cloudflare

**Cloudflare users** | [**List Directory**](cloudflare_users/)

| List name | Description |
| -------- | -------- |
| /domain/cloudflare_x.txt     | Split files (base domain)     |
| ex_cloudflare_users.txt     | Domains which used Cloudflare in the past, not anymore     |
| cloudflare_addedbyfqdn.txt     | Historical data (e.g. example.com was added because xyz.example.com is cloudflared     |
| cloudflare_supporter.txt | who is using Cloudflare or endorsing Cloudflare |


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
- Use "[Is MITM?](https://searxes.danwin1210.me/collab/sxes/tool_ismitm.php)" webpage.
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

Type A: Push to NotABug.org

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

Type B: Use "[Is MITM?](https://searxes.danwin1210.me/collab/sxes/tool_ismitm.php)" webpage.


3) If the website *no longer using Cloudflare*, *remove* it from /split/ list and *add* to "[ex_cloudflare_users.txt](cloudflare_users/ex_cloudflare_users.txt)".


--------------

## Website is NOT using Cloudflare (& blocking you)

**Anti-Tor users** (formerly "*TorBlocker Hall of Shame Part I*") | [**List Directory**](not_cloudflare/)

| List name | Description |
| -------- | -------- |
| list_error403.txt     | Returns HTTP Error 403 (Forbidden)     |
| list_error462.txt     | Returns HTTP Error 462     |
| list_customerror.txt     | Returns custom error message (not HTTP 403)     |
| list_other.txt     | any other form of tor-hostility or mistreatment |
| list_siteground.txt | siteground.com is a Tor-hostile hosting service that indiscriminately DoSes all Tor users with the collective judgement: "our system thinks you might be a robot!" Sometimes the site functions, and sometimes it times out, but the robot accusation is very common. |
| list_formerly_tor-hostile.txt | was previously on one of the above tor-hostile lists |

![](image/siteground.jpg)

```
IMPORTANT: Please add only "Base Domain" or "(base domain)[space](comment here)"

    if "community.example.com" is blocking Tor
        add "example.com"

    if "www.example.co.uk" is blocking Tor
        add "example.co.uk Error message: Anonymous not allowed"

    if "example.net" is blocking Tor
        add "example.net"
```

Some websites use other companies with the CloudFlare business model.

This is a collection of websites that ban Tor exits, other than through Cloudflare(e.g. showing access denied pages, systematic timing out connections, ...).

[This add-on](addon_firefox/whyrejectme) will help your list_error403 collection.
