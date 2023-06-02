export default {
  base: '/',
  title: '八股文', // 网站标题
  description: '学习文档总结', //网站描述
  cleanUrls: true, // 简洁化URL，即我们访问文件时不需要加后缀了，直接 /xxx/xxx即可，不要/xxx/xxx.md
  ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链
  server: {
    port: 3000,
    hmr: true, //开启热更新
    disableHostCheck: true, // 禁用跨域请求
  },
  markdown: {
    lineNumbers: true //md 启用行号
  },
  lastUpdated: true,//显示最近更新时间
  appearance: true,//可以选择深浅主题
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme: 'default', // 使用默认主题
  // 主题配置
  themeConfig: {
    lang: "zh-CN",
    siteTitle: '个人学习文档',
    logo: '/logo.png',
    socialLinks: [//右上角图标和链接，icon 可用svg 配置
      { icon: 'github', link: 'git@github.com:zhaoting786750652' },
    ],
    //搜索
    algolia: {
      appId: "R2IYF7ETH7",
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "index",
    },
    aside: true,
    // outline设置为deep可以解析2-6层深度的标题嵌套
    outline: "deep",
    outlineTitle: "目录",
    // lastUpdated: true,
    // lastUpdatedText: "更新时间",
    // 定义文章底部按钮对应的文本标题
    docFooter: {
      prev: "上一篇文章",
      next: "下一篇文章",
    },
    nav: [ //顶部导航栏内容
      { text: '首页', link: '/page/首页' },
      { text: 'vue', link: '/page/vue' },
      { text: 'js', link: '/page/js' },
      { text: 'css', link: '/page/css' },
      { text: 'Network', link: '/page/Network' },
      { text: 'react', link: '/page/react' },
      { text: 'webpack', link: '/page/webpack' },
      { text: '算法', link: '/page/算法' }

    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023",
    },
    
  }
}
