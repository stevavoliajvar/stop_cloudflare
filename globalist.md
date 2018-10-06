'Globalist' project used to be distributed with this project, and is still recommended as an interesting idea.
However since we're mostly on github anyway we might as well keep the two projects seperate

For 'Globalist' see globalist subdirectory here.
 
-> dead simple use of git and .onions to create a distributed repo for collaborative editin
no more hosting needed, just an ever-changing network of .onions. putting the "D" back in "DVCS" ...
 
  Anyone feeling adventurous? try downloading the script, have a good look at it of course and then try
  peering with hw5deh5c4im6obke.onion (post your own .onion, which Globalist generates, here)
  r2skudzatpggydyu.onion
  and give me a yell if it doesn't work (here or @fnord@quitter.se or @fnordomat@github.com)
  I shall set up a cronjob to pull your changes every 1/2 hour maybe and we'll see how it goes
 
-> anyone can git pull git://hw5deh5c4im6obke.onion/repo.git, and I'll pull back your changes. my little script just helps set this up
-> of course the repo can additionally be hosted somewhere "official" but why depend on it?
 
after that, let's improve the script and once it's out of alpha phase, decentralize!
 
Remarks:

- git blame can presumably be used to colorize contributions later
- no need to run it all the time, unsuccessful pull is not a problem (conditionally allow push in later version?)
 
got a better idea?
 
