const nav = require('./utils/nav');
const configureWebpack = require('./utils/webpack');
const plugins = require('./utils/plugins');
const { header } = require('./utils/constant');

module.exports = {
  title: '升高',
  description: '升高的博客',
  head: [
    ['link', { rel: 'icon', href: header }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: header,
    nav,
    sidebar: false,
    sidebarDepth: 0,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  configureWebpack,
  markdown: {
    lineNumbers: false
  },
  plugins,
}
