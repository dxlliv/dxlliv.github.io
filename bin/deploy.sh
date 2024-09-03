#!/bin/sh

yarn install
yarn generate
rm -rf dist

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update dist folder"
git push