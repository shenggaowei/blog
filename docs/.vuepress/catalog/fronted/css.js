const { parsedArticleName } = require('../lib');

const prefix = '/fronted/css/';
const data = [
    '两栏布局',
    '居中方案'
]

module.exports = parsedArticleName(prefix, data);