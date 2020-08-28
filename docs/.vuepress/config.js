const css = require('./catalog/fronted/css');
const js = require('./catalog/fronted/js');
const webpack = require('./catalog/fronted/webpack');
const node = require('./catalog/backend/node');
const note = require('./catalog/life/note');

module.exports = {
    title: '大芒果',
    description: '大芒的博客果',
    head: [
      ['link', { rel: 'icon', href: 'https://shenggao.oss-cn-beijing.aliyuncs.com/info/head.jpg' }]
    ],
    themeConfig: {
      displayAllHeaders: true,
      logo: 'https://shenggao.oss-cn-beijing.aliyuncs.com/info/head.jpg',
      nav: [
        { text: '主页', link: '/' },
        { text: '前端', link: '/fronted/' },
        { text: '后端', link: '/backend/' },
        { text: '随笔', link: '/life/' },
        {
            text: '计算机',
            ariaLabel: 'Language Menu',
            items: [
              { text: '计算机组成原理', link: '/language/chinese/' },
              { text: '操作系统', link: '/language/japanese/' }
            ]
        }
      ],
      sidebar: {
        '/backend/': [
          {
            title: 'node',
            children: node
          },
        ],
        '/fronted/': [
          {
            title: 'javascript',
            children: js,
          },
          {
            title: 'css',
            children: css,
          },
          {
            title: 'webpack',
            children: webpack
          },
        ],
        '/life/': [
          {
            title: 'note',
            children: note
          },
        ],
      },
      sidebarDepth: 0
    }
  }