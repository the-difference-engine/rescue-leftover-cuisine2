#!/bin/bash
# install node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
curl -o nodejs.deb https://deb.nodesource.com/node_8.x/pool/main/n/nodejs/nodejs_8.11.4-1nodesource1_amd64.deb && \
sudo apt-get install -y ./nodejs.deb && \
# install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
sudo apt-get update && sudo apt-get install yarn
