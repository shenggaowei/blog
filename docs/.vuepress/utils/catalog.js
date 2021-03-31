const css = require('../catalog/fronted/css');
const js = require('../catalog/fronted/js');
const rn = require('../catalog/fronted/rn');
const h5 = require('../catalog/fronted/h5');
const webpack = require('../catalog/fronted/webpack');
const node = require('../catalog/backend/node');
const pm2 = require('../catalog/backend/pm2');
const nginx = require('../catalog/backend/nginx');
const tool = require('../catalog/tool/vim');
const note = require('../catalog/read_travel/note');
const travel = require('../catalog/read_travel/travel');
const data_struct = require('../catalog/science/data_struct');

const sidebar = {
  '/backend/': [
    {
      title: 'node',
      children: node
    },
    {
      title: 'nginx',
      children: nginx
    },
    {
      title: 'pm2',
      children: pm2
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
    {
      title: 'react-native',
      children: rn
    },
    {
      title: 'h5',
      children: h5
    },
  ],
  '/tool/': [
    {
      title: 'vim',
      children: tool
    }
  ],
  '/note/': [
    {
      title: '读书笔记',
      children: note
    },
    {
      title: '旅行游记',
      children: travel
    }
  ],
  '/science/': [
    {
      title: '数据结构与算法',
      children: data_struct
    },
  ],
}

module.exports = sidebar;