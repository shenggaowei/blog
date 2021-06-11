const { parsedArticleName } = require('../lib');

const prefix = '/fronted/react_native/';
const data = [
  'animated',
  '问题记录',
  'video_coding'
]

module.exports = parsedArticleName(prefix, data);