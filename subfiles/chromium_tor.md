# How to use Chromium with Tor


0. Install Tor.

1. Download "`set-pac-from-file.zip`" from [Issue 839566: Remove support for PAC file to be loaded from files](https://bugs.chromium.org/p/chromium/issues/detail?id=839566#c40)

2. Open your Chromium directory and create a folder named "`pac-loader`" (_anything_)

3. Extract the zip to "`pac-loader`"

4. Open "`my_pac_script.js`" file

5. Change it like this.

```
function FindProxyForURL(url, host){
    if (shExpMatch(host,"*.onion")){return "SOCKS5 127.0.0.1:9050";}
    if (shExpMatch(host,"www.cloudflare.com")||shExpMatch(host,"www.nsa.gov")){return "SOCKS5 0.0.0.0:7";}
	return "SOCKS5 127.0.0.1:9050";
}
```

6. Open Chromium > 3 dots > `More Tools` > `Extensions`

7. Enable "`Developer mode`"

8. Click "`Load unpacked`"

9. Select your "`pac-loader`" directory

10. Click "`Details`" of "`Set PAC from file`"

11. Enable "`Allow in incognito`"

12. Close and reopen your browser

