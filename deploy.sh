#!/usr/bin/env sh

# 忽略错误
set -e

# 根目录下构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -am 'deploy'


# 如果部署到 https://<USERNAME>.github.io  托管仓库
# git push -f git@github.com:zhaoting786750652/zhaoting786750652.github.io.git gitee

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f http://zhaoting786750652.github.io/vitePress/ gitee

# 部署码云page gitee是分支
git push -f https://gitee.com/haerzt/vitepress.git gitee
# 码云托管仓库地址：
# http://haerzt.gitee.io/vitepress/
# 部署码云源码
# git push -f https://gitee.com/haerzt/vitepress.git master


cd -