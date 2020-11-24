# CrimeFlarE
***Why you should say "NO" to Cloudflare***

## Solutions - Change default DNS provider of firefox

Mozilla (Firefox) has partnered up with Cloudflare and will resolve the domain names from the application itself via a DNS server from Cloudflare.
Cloudflare will then be able to read everyone’s DNS requests.

> You can disable it in “about:config"

- The string value of "`network.trr.uri`" should be empty.
- The string value of "`network.trr.resolvers`" should be set to `[]`.

> Or in /distribution/policies.json` (Firefox ESR)

```
...
      "DNSOverHTTPS": {
         "Enabled": false,
         "ProviderURL": "https://0.0.0.0/"
      },
...
```

Some other settings can also contain Cloudflare URLs. It is recommended to search for "`cloudflare`".
GNU Icecat and older Firefox versions(<68) are not affected *yet*.

![The about:config page which shows the Cloudflare DNS address in the network.trr.uri string.](../image/firefox-cloudflare-dns-settings.jpg)
