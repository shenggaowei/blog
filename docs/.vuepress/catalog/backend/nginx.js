const { parsedArticleName } = require('../lib');

const prefix = '/backend/nginx/';
const data = [
  'nginx搭建web服务器'
]

module.exports = parsedArticleName(prefix, data);