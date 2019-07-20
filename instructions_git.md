# How to setup git

This procedure will give you a cloudflare-tor fork with a
privacy-respecting configuration to do pushes with SSH over Tor using
codeberg.org ("CDB").  This procedure is designed for ***linux***.
The first step covers Windows too, but these instructions probably
need more adaptations for Windows and other platforms.


- Linux: `aptitude install git tor ssh`
- Windows: Download `https://github.com/git-for-windows/git/releases/PortableGit-2.21.0-64-bit.7z` & run `git-bash.exe`


[1]
```
    host codeberg-*
         hostname     codeberg.org
         ForwardX11   no
         ProxyCommand connect -4 -S 127.0.0.1:9050 $(tor-resolve %h 127.0.0.1:9050) %p
    host codeberg-snowden
         IdentityFile /home/user/.ssh/id_rsa_codeberg-snowden
```

[2]
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

<ol>
<li> install Git, SSH(Not Windows), and Tor (if you haven't already)
<li> create a `codeberg.org` account (username "snowden" will be used for this example)
<li> create an SSH key pair `$ ssh-keygen -t rsa -N '' -C 'snowden at codeberg' -f "$HOME"/.ssh/id_rsa_codeberg-snowden`
<li> edit `$HOME/.ssh/config`[1]
<li> copy `"$HOME"/.ssh/id_rsa_codeberg-snowden.pub` to clipboard
<li> codeberg.org > settings > SSH/GPG Keys > add key (paste from clipboard)
<li> $ `firefox https://codeberg.org/crimeflare/cloudflare-tor`
<li> fork it (top right corner)
<li> go to the directory you want the project to be rooted in (hereafter we'll call it `$project_root`).
<li> anonymously download your fork: $ `torsocks git clone https://codeberg.org/snowden/cloudflare-tor`
<li> edit `$project_root/cloudflare-tor/.git/config` to include the
   account name and email address that will be on every commit, as
   well as the URL[2]

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

<li> make your first change
<li> (from `$project_root`) $ `git add . -u -n`
<li> check that the files listed are what you changed and intend to push upstream
<li> if yes: `$ git add . -u`
<li> $ `git commit -m 'description of first change'`
<li> $ `git push origin master`
<li> $ `firefox https://codeberg.org/crimeflare/cloudflare-tor`
<li> make a new pull request
</ol>

&nbsp;

Notice that only the `git clone` command has a `torsocks` prefix and
all git commands thereafter do not.  Whenever git operates on the
cloudflare-tor project, all connections to codeberg are automatically over
Tor with this configuration (because the `url` in `.git/config`
references the virtual host `codeberg-snowden` in `~/.ssh/config`).
