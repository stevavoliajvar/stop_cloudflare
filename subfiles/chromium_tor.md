# How to use Chromium with Tor


0. Install Tor.
 - Linux: `apt install tor`
 - Windows: [e.g.](https://2019.www.torproject.org/docs/tor-manual.html.en) `tor --service install -options -f C:\tor\torrc`

1. Download "`set-pac-from-file.zip`" from [Issue 839566: Remove support for PAC file to be loaded from files](https://bugs.chromium.org/p/chromium/issues/detail?id=839566#c40)

2. Open your Chromium directory and create a folder named "`pac-loader`" (_anything_)

3. Extract the zip to "`pac-loader`"

4. Open "`my_pac_script.js`" file

5. Change it like this.
 - [Example PAC File](https://findproxyforurl.com/example-pac-file/)

```
function FindProxyForURL(url, host){
    if (shExpMatch(host,"*.onion")){return "SOCKS5 127.0.0.1:9050";}
    if (shExpMatch(host,"*.cloudflare.com")){return "SOCKS5 0.0.0.0:7";}
	return "SOCKS4 127.0.0.1:9050";
}
```

6. Open Chromium > 3 dots > `More Tools` > `Extensions`

7. Enable "`Developer mode`"

8. Click "`Load unpacked`"

9. Select your "`pac-loader`" directory

10. Click "`Details`" of "`Set PAC from file`"

11. Enable "`Allow in incognito`"

12. Close and reopen your browser

