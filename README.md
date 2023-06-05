
# 部署
托管页面只部署dist下的文件，用gitee分支
项目代码用master分支部署全部文件
可以修改 deploy.sh里的命令，通过 yarn run docs:deploy 一键部署
注意：公开的仓库才能开启托管

# 部署码云page托管
# 码云托管仓库地址：http://haerzt.gitee.io/vitepress/ 所以需要 config.js里 base: '/vitepress/',
1. npm run docs:build
2. cd docs/.vitepress/dist
3. git add .
4. git commit -am 'deploy'
5. git push -f https://gitee.com/haerzt/vitepress.git gitee
6. 输入用户名和密码（用户名haerzt）
![图片描述](./doc/public/giteePage.jpg)
# 部署码云项目
1. git add .
2. git commit -am 'deploy'
3. git push -f https://gitee.com/haerzt/vitepress.git master


# 部署github托管
# github托管仓库地址：https://zhaoting786750652.github.io/vitePress/ 所以需要 config.js里 base: '/vitePress/',
1. npm run docs:build
2. cd docs/.vitepress/dist
3. git add .
4. git commit -am 'deploy'
5. git push -f http://github.com/zhaoting786750652/vitePress.git gitee  (http的)
6. 输入用户名和密码(用户名zhaoting786750652，密码用github的token)
# 部署github项目
1. git add .
2. git commit -am 'deploy'
3. git push -f http://github.com/zhaoting786750652/vitePress.git master  (http的)