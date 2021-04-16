const sidebar = require('./utils/catalog');
const nav = require('./utils/nav');
const configureWebpack = require('./utils/webpack');
const plugins = require('./utils/plugins');
const { header } = require('./utils/constant');

module.exports = {
  title: '大芒果',
  description: '大芒果的博客',
  head: [
    ['link', { rel: 'icon', href: header }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: header,
    nav,
    sidebar,
    sidebarDepth: 0,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  configureWebpack,
  markdown: {
    lineNumbers: false
  },
  plugins,
  base: '/blog/'
}
