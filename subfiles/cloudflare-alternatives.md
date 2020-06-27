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
| [sucuri](https://sucuri.net) | not gratis | $200+ | https://sucuri.net/|
| PerimeterX        | not gratis                        | ? | - |
| Github pages      | uses Microsoft servers            | Free | https://pages.github.com/ (WARNING: Tor/VPN users will get their [account blocked automatically](https://github.com/crimeflare/cloudflare-tor) by Github) |
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
| Gitlab pages      | GitLab is now Cloudflared |
| Impurva Incapsula | I think they're Tor-hostile; may need some investigation |
| equalit.ie | some people recommend equalit.ie as a CF alternative, but equalit.ie uses CF themselves so wtf |