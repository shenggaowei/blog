const { parsedArticleName } = require('../lib');

const prefix = '/fronted/css/';
const data = [
    '两栏布局',
    '居中方案',
    '文本省略号',
    'bfc',
    'css外边距',
    'float',
    'transform',
    'vertical-align'
]

module.exports = parsedArticleName(prefix, data);