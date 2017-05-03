#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Globalist: manage a global repo via decentral git instances
# you may peer with any number of other Globalist onions

# Think onionshare, but with permanent onion addresses, P2P and DVCS

# Python2/3. Dependencies:
#   - stem (torsocks pip install stem / via distro)
#     a recent version (>= 1.5.0) is needed for auth
#   - git must be installed
#   - torsocks must be installed
#   - tor must be up and running and the ControlPort open

# Use scenario:
# a) Run Tor.
# b) Run the server in the background and schedule a job for pulling from peers.
#    it is a git server that listens on <your-identifier>.onion:9418
#    it's to be expected that peers uptime will intersect with yours
#    only a fraction of the time.
# c) Globalist.py creates a git, which you may use to push and pull your own changes.

# __version__ = "0.0.5"

import globalist
import sys

if __name__=='__main__':
    globalist.main(args=sys.argv[1:])
