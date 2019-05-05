# How to setup git to collaborate on the cloudflare-tor project with SSH over Tor

This procedure will give you a cloudflare-tor fork with a
privacy-respecting configuration to do pushes with SSH over Tor using
the onion host for notabug.org ("NAB").  This procedure is designed
for ***linux***.  The first step covers Windows too, but these
instructions probably need more adaptations for Windows and other
platforms.

1. install git, ssh, and tor (if you haven't already)
| Debian | Windows |
|--|--|
| `aptitude install git tor ssh` | (git only) download and extract `https://github.com/git-for-windows/git/releases/PortableGit-2.21.0-64-bit.7z`; run `git-bash.exe` |
1. create a `notabug.org` account (username "snowden" will be used for this example)
1. create an SSH key pair ```
  $ ssh-keygen -t rsa -N '' -C 'snowden at notabug' -f "$HOME"/.ssh/id_rsa_nab-snowden```
1. edit `$HOME/.ssh/config`:
```
    host notabug-*
         hostname     qs3zumwfci4tntnd.onion
         ForwardX11   no
         ProxyCommand connect -4 -S 127.0.01:9050 %h %p
    host notabug-snowden
         IdentityFile /home/user/.ssh/id_rsa_nab-snowden
```
1. copy `"$HOME"/.ssh/id_rsa_nab-snowden.pub` to clipboard
1. notabug.org > settings > SSH Keys > add key (paste from clipboard)
1. $ `firefox https://notabug.org/themusicgod1/cloudflare-tor`
1. fork it (top right corner)
1. go to the directory you want the project to be rooted in (hereafter we'll call it `$project_root`).
1. anonymously download your fork: $ `torsocks git clone https://notabug.org/snowden/cloudflare-tor`
1. edit `$project_root/cloudflare-tor/.git/config` to include the
   account name and email address that will be on every commit, as
   well as the URL:
```
[user]
        email = BM-yadayadayada6fgnLfybVnCcWf25AGZcgg@bitmessage.ch
        name = snowden
[remote "origin"]
        url = git@notabug-snowden:snowden/cloudflare-tor.git
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
1. $ `firefox https://notabug.org/themusicgod1/cloudflare-tor`
1. make a new pull request

Notice that only the `git clone` command has a `torsocks` prefix and
all git commands thereafter do not.  Whenever git operates on the
cloudflare-tor project, all connections to NAB are automatically over
Tor with this configuration (because the `url` in `.git/config`
references the virtual host `notabug-snowden` in `~/.ssh/config` which
uses the onion address).
