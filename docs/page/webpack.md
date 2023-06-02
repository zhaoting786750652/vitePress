# webpack相关
## transpileDependencies: true 
如果transpileDependencies为true或为正则，接着再看package.json里的browserslist是否处在低级浏览器范围，如果处在低级浏览器范围内，那么会把node_modules里用得到的高级语法进行babel编译。如果transpileDependencies为false,则会把node_modules里用到的高级语法原封不动的打包，会造成在低级浏览器访问报错的情况

## webpack热更新原理
Hot Module Replacement应该所有人都知道，现象就是你修改代码保存之后，浏览器不会刷新，只会修改你更改过的依赖代码。我们平时用webpack-dev-server如果没有配置，是直接刷新浏览器，并不是热更新。
之前遇见几次问webpack热更新原理，我只是知道和怎么使用，也没真的去了解一下，这次了解了一下，发现没有对webpack深层次研究，根本不懂，所以今天只是简单了解一下，具体还是得去研究源码才能真正掌握。
实现webpack热更新就不说了，官网HMR指南写的很清楚，用vue开发或者用react开发也都可以看效果。至于HMR的好处说来说去就一个，提升开发效率，即不用你手动刷新浏览器，还可以保持浏览器状态。
我们一般用webpack-dev-server启动一个开发服务devServer，webpack内部实现watch，文件发生修改就重新打包编译保存在内存中，webpack-dev-server依赖中间件webpack-dev-middleware和webpack之间进行交互，如果文件变化了，没有配置热更新，webpack-dev-server会通知浏览器进行刷新，注意是刷新不是热更新。启动开发服务之后，浏览器和服务端是通过websocket进行长连接的，服务端主要是传递hash值，热更新主要是通过hash值判断进行热更新

## 主要内容
+ entry，output，resolve配置
+ webpack如何寻找模块对应的文件(alias 路径别名)，
+ loaders (js ,jsx: babel-loader, less: css-loader , 图片，字体文件 :url-loader), 
+ plugin如下：LoaderOptionsPlugin：pxtorem，sourceMap，eslint,vConsolePlugin

## 常用webpack插件
new CopyWebpackPlugin. ---复制 文件      

new HtmlWebpackPlugin ---- 自动注入html       

new webpack.DefinePlugin  ----   创建一个在编译时可以配置的全局常量（process.env.NODE_ENV ，，，node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息，NODE_ENV是用户一个自定义的变量，在webpack中它的用途是判断生产环境或开发环境的依据的，

loader的解析顺序是从下到上,从右往左,编译顺序应该是先用css-loader编译css代码,再用style-loader放入到网页的style标签里面去。所以css-loader在右,style-loader在左,按照指定顺序排列
