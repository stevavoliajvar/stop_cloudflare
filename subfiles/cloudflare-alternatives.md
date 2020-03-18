[Home](../README_short.md)

---

# CrimeFlarE
***Why you should say "No" to Cloudflare***


## Self-hosting
Self-hosting often works great, but it requires some effort to setup. It is 
more aimed at technical people.

We might create a guide for some self-hosting basics which don't require 
Cloudflare.


## Alternatives
| Alternative       | Drawback                          | Price | Link |
| ----------------- | --------------------------------- | ------ | ---- |
| PerimeterX        | not gratis                        | ? | - |
| Github pages      | uses Microsoft servers            | Free | https://pages.github.com/ (WARNING: Tor/VPN users will get their [account blocked automatically](https://github.com/crimeflare/cloudflare-tor) by Github) |
| Gitlab pages      | uses Google servers           | Free | https://gitlab.com/pages/ (WARNING: Some area of Gitlab is Cloudflare) |
| Surge.sh      | uses custom servers           | Free | https://surge.sh/ |

## Not researched yet
### CDNJS
CDNJS is sponsored by Cloudflare. It might use it in the background.

## Why X is not included
| X       | Reason |
| ------- | ------ |
| Netlify | Uses Amazon AWS which is also a content delivery network. It would be hypocritical to include it. |
| Siteground | Tor-hostile people. |
|jsDelivr | Uses Cloudflare, see their [network page](https://www.jsdelivr.com/network) |
