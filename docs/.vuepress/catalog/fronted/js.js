const { parsedArticleName } = require('../lib');

const prefix = '/fronted/js/';
const data = [
  '函数式编程',
  '如何发布npm包',
  '数组去重',
  'bind、call和apply实现',
  '拖拽实现',
  '数据类型检测',
  'ajax、fetch和jsonp',
  '正则表达式',
  'h5新增事件',
  'react框架key的作用',
  'reactHook问题总结',
  'ts学习',
  '事件循环',
  'pwa',
  'taro开发问题总结',
  'es5继承',
  '跨浏览器事件对象',
  '前端本地缓存概况之浏览器缓存策略',
  'cloneDeep',
  'js数据类型检测',
]

module.exports = parsedArticleName(prefix, data);
