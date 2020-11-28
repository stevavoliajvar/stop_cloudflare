### Shared on Mastodon

Who is sharing most Cloudflare links to other people?
Oh, it's you?

Congratulations, you are ranked in the top 50 of...

![](https://codeberg.org/crimeflare/stop_cloudflare/raw/branch/master/image/clapclapclap.gif)

(_Sarcasm? Of course. Stop sharing CF links already!_)


### Some public reaction

```
'your little protest bot is making people upset, and i'm worried it might cause people to defederate from the instance, please tone it down'

We need a new word for describing how fucked up this is, insanity just isn't doing it anymore.
No shit it makes people upset *that's the fucking point*
```
-- [Jeff Cliff](http://qhtn4w2q36dojls2.onion/)


```
The bot doesn't care about you personally.
It's doing a public service for your readers, who you otherwise sent into a #netneutrality-hostile #privacy-abusive walled-garden.
It's to protect them so they are warned and have a trustworthy link to follow.
```
-- [resist1984](https://social.privacytools.io/@resist1984)


### Code

- [index.php](index.php): Main website to show the result
- [cron.php](cron.php): Use it with your cronjob


### Database

- toot_cfsaid: Tweet URL which CF link was observed
```
id	varchar(40) UNIQUE
who	varchar(80) INDEX
url	varchar(200) INDEX
ym	int(6) INDEX
```

- toot_notcf_fqdn: Unknown FQDN which was not listed as Cloudflare
```
fqdn	varchar(200) UNIQUE
dl	int(1) INDEX
```

- toot_scanned: To make sure not to analyze same tweet again
```
id	varchar(40) UNIQUE
who	varchar(80) INDEX
iscf	int(1) INDEX
ym	int(6) INDEX
```

- toot_sharefqdn: Just for counting FQDN
```
id	varchar(40) UNIQUE
fqdn	varchar(200) INDEX
ym	int(6) INDEX
```


### Live demo

If you want to see this in action: [Onion](http://stopcloudflare@avrynpc2q7pknqa3ucf5tvjcwad5nxvxgwnzvl2b6dx6uo4f7nc7zzqd.onion/mastodon/)
