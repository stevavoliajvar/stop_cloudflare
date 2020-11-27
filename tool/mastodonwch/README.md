### Shared on Mastodon

Who is sharing most Cloudflare links to other people? Please stop it already.


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