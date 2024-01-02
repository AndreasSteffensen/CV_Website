#!/usr/bin/env bash
echo 1201 | sudo -S /etc/init.d/nginx start
node /home/steff/CV_Website/pagev1/server.js
