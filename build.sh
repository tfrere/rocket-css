#!/bin/sh

sudo npm install -g gulp
sudo npm install -g bower
sudo npm install -g protractor
npm install

./node_modules/protractor/bin/webdriver-manager update
bower install

gulp production

echo "Install Done !"
