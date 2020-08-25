## How to help translate cloudflare-tor


- "_(en|eo)(|.ethics).md_" are _base files_.
- If you edit _Base files_, do edit `translateData/TEMPLATE.*.(tab|txt)`.



### _zz_.md's translation is horrible. How can I fix this?

Please do not edit _zz_.md directly. It may be overwritten.

1. [Fork](https://codeberg.org/crimeflare/cloudflare-tor/forks) cloudflare-tor.

2. Copy `/readme/translateData/**TEMPLATE.main.tab**` to `/readme/translateData/override/**zz**.main.tab`.

3. Remove all lines but keep what you want to fix. (you can translate all lines if you wish)

4. Translate the right-side of the string.

5. Make a pull request.

6. We'll regenerate MD file using your override file.
