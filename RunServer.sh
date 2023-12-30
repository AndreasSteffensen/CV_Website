#!/usr/bin/env bash
git pull
sudo /etc/init.d/nginx start
cd pageV.1/
node server.js
