#!/bin/sh
# Arma dist/ solo con los archivos públicos de la web (sin README, docs ni scripts).
# Cloudflare Pages: build command «sh scripts/build.sh», output directory «dist».
set -e
rm -rf dist
mkdir -p dist
cp index.html menu.html privacy.html 404.html sitemap.xml robots.txt _redirects favicon.ico favicon.svg dist/
cp -R assets img dist/
