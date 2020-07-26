const { parsedArticleName } = require('../lib');

const prefix = '/fronted/webpack/';
const data = [
    '基础'
]

module.exports = parsedArticleName(prefix, data);