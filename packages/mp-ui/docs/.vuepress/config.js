const path = require('path')
module.exports = {
  base: '/',
  port: '3951',
  title: 'MpUI组件库',
  description: '基于Ant Design of Vue组件库封装',
  markdown: {
    lineNumbers: true
  },
  head: [],
  // plugins: ['demo-container', 'typescript', '@vuepress/back-to-top', '@vuepress/active-header-links'],
  themeConfig: {
    sidebar: 'auto',
    // logo: '/assets/logo.png',
    docsDir: 'docs',
    sidebarDepth: 1,
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/guide/install' }
      // {
      //   text: '设计规范', link: 'https://lanhuapp.com/web/#/item/project/stage?pid=ce1f4783-6a14-48f5-812b-e0bb43fa843d&see=all'
      // }
    ],
    lastUpdated: '上次更新',
    smoothScroll: true,
    sidebar: {
      '/guide/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'introduce',
            'install',
            'quickstart'
          ]
        },
        {
          title: '布局组件',
          collapsable: false,
          children: [
            'layout',
            'wrap',
            'login',
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'demo',
            'time-filter',
            'radio',
            'slider',
            'form-filter',
            'form',
            'file-upload',
            'image-upload',
            'image',
            'tag',
            'step',
            'card',
            'list',
            'modal',
            'empty',
            'title',
            'pager',
            'image-time-line',
            'drawer',
            'plate'
          ]
        },
        {
          title: '业务组件',
          collapsable: false,
          children: [
            'device-selector',
            'gis-supermap',
            'offline-gismap'
          ]
        },
      ]
    }
  },
  configureWebpack: {
    node: {
      global: true,
      process: true
    },
    resolve: {
      alias: {
        // '@': path.resolve(''),
        '@assets': path.resolve(__dirname, './public/assets/'),
        '@packages': path.resolve(__dirname, '../../packages/')
      }
    }
  },
  chainWebpack: (config) => {
    // 兼容core-js,3.x与2.x版本不匹配问题
    config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  },
  less: {
    lessOptions: {
      // modifyVars: {
      //   hack: `true; @import "${antdTheme}"`
      // },
      javascriptEnabled: true
    },
  },
}