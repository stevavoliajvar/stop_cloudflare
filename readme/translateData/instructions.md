## How to help translate cloudflare-tor


- "_(en|eo)(|.ethics).md_" are _base files_.
- If you edit _base files_, do edit `translateData/TEMPLATE.*.(tab|txt)`.

---

### _zz_.md's translation is horrible. How can I fix this?

Please do not edit _zz_.md directly. It may be overwritten.

(_zz_ is not "en" nor "eo")


1. [Fork](https://codeberg.org/crimeflare/cloudflare-tor/forks) cloudflare-tor.

2. Copy `/readme/translateData/TEMPLATE.main.tab` to `/readme/translateData/override/zz.main.tab`.
  - /readme/translateData/TEMPLATE.main.tab > /readme/translateData/override/zz.main.tab
  - /readme/translateData/TEMPLATE.ethics.tab > /readme/translateData/override/zz.ethics.tab

3. Remove all lines but keep what you want to fix. (you can translate all lines if you wish)
  - e.g `mainx0n00013	Take a look at the right image.`
  - format `string_key TAB string_value`
    - string_value: Please don't include any HTML tags, links, or markdown syntax.

4. Translate the right-side of the string(_string\_value_).
  - Do not edit left-side of the string(_string\_key_), it will be ignored.

5. Make a pull request.

6. We'll regenerate MD file using your override file later.


### I don't want to create an account on Codeberg.

You can send edited "tab" files to us, or submit it to upstream.


### Why should I help you?

If you help us, more people around the world who speaks your language can learn about the problems of CloudFlare.


### Can I add my name to translation file as "credit"?

Sure. Tell us about it when creating a pull request.
  - e.g `zz by Your_Name, Other_EditName`
