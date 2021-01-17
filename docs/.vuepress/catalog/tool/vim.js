const { parsedArticleName } = require('../lib');

const prefix = '/tool/vim/';
const data = [
  'vim操作'
]

module.exports = parsedArticleName(prefix, data);
