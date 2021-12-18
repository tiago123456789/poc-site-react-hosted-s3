#!/bin/bash

cd /root/site/poc-site-react-hosted-s3
git pull origin master
npm i
npm run build
cd build/
cp -r ./ /var/www/html

