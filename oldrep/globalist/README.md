# Globalist
Globalist provides distributed sharing of repositories without the need of central instances (like GitHub).

This is an attempt to ease the distribution of git repos, to overcome the risk of a central points of failure.

Globalist stands for "Global List" and aims at replacing any EtherPads of more than transient value.

It is also meant to evolve into an experimental distributed asynchronous wiki facility.

Nodes can come and go, and network topology only depends on the peers entries in the nodes' config files. Changes that are merged by one's peers propagate by diffusion.

The official repository can be found at https://codeberg.org/crimeflare/cloudflare-tor

## Usage

To use Globalist.py python3 is needed. Either run it from globalist directory with `python3 Globalist.py` or or install it as described below.

Per default an open tor ControlPort at 9151 without authentication is expected. You can choose another port with `-C`.
For a list of option see `--help`.

### Create repository

Make a new directory and put this in the file ./repo.cfg (when creating a new repository instead of cloning from a peer, the list or indeed the repo.cfg file can remain empty)

```
[network]
peers = <comma-separated list of onion domain names, with or without the suffix .onion>
```

For a public repository, no authentication is needed (option -X). In case authentication is used, prepend the secret as follows: somebody:secret@peeroniondomainname.onion

For each shared repo, Globalist will create one .onion service. Note that it is possible to use either bare repos or not-bare repos.

### Clone a repository

To clone a bare repo:

```
Globalist.py -bc ...
```

To pull once from a bare repo:

```
Globalist.py -bp
```

## To install locally

```
./setup.py install --user
```

or 

```
torsocks pip3 install -v -e .
```

## To do

set default commit messages
support signed commits
push?
