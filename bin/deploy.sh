#!/bin/sh

yarn install
yarn generate
rm -rf docs dist

# move docs dist folder to dist/docs
mv .output/public docs
rm -rf .output dist

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update dist folder"
git push