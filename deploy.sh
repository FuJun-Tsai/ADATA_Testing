set -e
npm run build
cd dist
git init 
git add -A
git commit -m 'online'
git push -f https://github.com/FuJun-Tsai/ADATA_Testing.git master:gh-pages
cd -