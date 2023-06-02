#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
# cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io  托管仓库
# git push -f git@github.com:zhaoting786750652/zhaoting786750652.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/zhaoting786750652/vitePress.git master

# 部署码云 master是分支
git push -f https://gitee.com/haerzt/vitePress.git master
# 码云托管仓库地址：

cd -