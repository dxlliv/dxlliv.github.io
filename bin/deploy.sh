#!/bin/sh

npm install

# build planner
npm run generate

# delete symbolic link
rm dist

# move real dist folder to /dist
mv .output/public/ dist

# place dist files manually in gh-pages
# since git subtree seems unusable now
rm -rf ../dist
mv dist ../dist
git checkout gh-pages
rm -r *
mv ../dist/* .

# disable jekyll to avoid any _problems
touch .nojekyll

# commit to gh-pages
git add .
git commit -m "Update gh-pages"