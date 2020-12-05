const { parsedArticleName } = require('../lib');

const prefix = '/fronted/webpack/';
const data = [
    '基础用法'
]

module.exports = parsedArticleName(prefix, data);