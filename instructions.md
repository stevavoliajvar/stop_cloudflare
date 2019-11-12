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


Type B: Just scan the FQDN on "[Is MITM?](https://searxes.eu.org/collab/sxes/tool_ismitm.php)" webpage.


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

---

# How to setup git

This procedure will give you a cloudflare-tor fork with a
privacy-respecting configuration to do pushes with SSH over Tor using
codeberg.org ("CDB").  This procedure is designed for ***linux***.
The first step covers Windows too, but these instructions probably
need more adaptations for Windows and other platforms.


- Linux: `aptitude install git tor ssh`
- Windows: Download `https://github.com/git-for-windows/git/releases/PortableGit-2.21.0-64-bit.7z` & run `git-bash.exe`

1. install Git, SSH(Not Windows), and Tor (if you haven't already)
1. create a `codeberg.org` account (username "snowden" will be used for this example)
1. create an SSH key pair `$ ssh-keygen -t rsa -N '' -C 'snowden at codeberg' -f "$HOME"/.ssh/id_rsa_codeberg-snowden`
1. edit `$HOME/.ssh/config`:
```
    host codeberg-*
         hostname     codeberg.org
         ForwardX11   no
         ProxyCommand connect -4 -S 127.0.0.1:9050 $(tor-resolve %h 127.0.0.1:9050) %p
    host codeberg-snowden
         IdentityFile /home/user/.ssh/id_rsa_codeberg-snowden
```

1. copy `"$HOME"/.ssh/id_rsa_codeberg-snowden.pub` to clipboard
1. codeberg.org > settings > SSH/GPG Keys > add key (paste from clipboard)
1. $ `firefox https://codeberg.org/crimeflare/cloudflare-tor`
1. fork it (top right corner)
1. go to the directory you want the project to be rooted in (hereafter we'll call it `$project_root`).
1. anonymously download your fork: $ `git clone git@codeberg-snowden:crimeflare/cloudflare-tor.git`
1. edit `$project_root/cloudflare-tor/.git/config` to include the account name and email address that will be on every commit, as well as the URL:
```
[user]
        email = BM-yadayadayada6fgnLfybVnCcWf25AGZcgg@bitmessage.ch
        name = snowden
[remote "origin"]
        url = git@codeberg-snowden:snowden/cloudflare-tor.git
     	fetch = +refs/heads/*:refs/remotes/origin/*
[remote "upstream"]
        url = git@codeberg-snowden:crimeflare/cloudflare-tor.git
     	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

1. make your first change
1. (from `$project_root`) $ `git add . -u -n`
1. check that the files listed are what you changed and intend to push upstream
1. if yes: `$ git add . -u`
1. $ `git commit -m 'description of first change'`
1. $ `git push origin master`
1. $ `firefox https://codeberg.org/crimeflare/cloudflare-tor`
1. make a new pull request

&nbsp;

Whenever git operates on the cloudflare-tor project, all connections
to codeberg are automatically over Tor with this configuration
(because the `url` in `.git/config` references the virtual host
`codeberg-snowden` in `~/.ssh/config`).


# About Cloudflare `base domain` list

Our mission is clear - `stay away from Cloudflare`.

If the `subdomain.example.com` is cloudflared, we add `example.com` to the database. (`subdomain.example.com` is the sub-domain of `example.com`. Only `the owner` of `example.com` can create sub-domain)

Even if `whatever.example.com` is _not_ behind cloudflare we _will_ raise a warning, because the base domain `example.com` is `cloudflare user`.

`The owner` of `example.com` can enable Cloudflare to `whatever.example.com` at any time without user's notice. It can be done from `dash.cloudflare.com` webpage or hitting `Cloudflare API`. `The owner` is supporting `Cloudflare` and this is severe `security risk`.

Until `the owner` completely stop using Cloudflare service for `example.com`, we _do not_ remove `example.com` from the database.

There is `no exception`.

If `the owner` moved away from `cloudflare` **completely**, you are welcome to add `example.com` to the "[ex_cloudflare_users.txt](cloudflare_users/ex_cloudflare_users.txt)" - after checking `example.com` with online tool below.


1. Open "[Is MITM?](https://searxes.eu.org/collab/sxes/tool_ismitm.php)" webpage.

2. Input `gitlab.com` and click `Skanu`.

3. Click `testo` for detailed scan.

4. If you got `---Finish---`, the domain might stopped using Cloudflare. We'll investigate and remove it - or not. (wait some days and scan again to see whether the domain is removed)

`Only a few Cloudflare user leave Cloudflare. False positive is uncommon.`