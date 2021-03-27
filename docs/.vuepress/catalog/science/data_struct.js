const { parsedArticleName } = require('../lib');

const prefix = '/science/data_struct/';
const data = [
    '排序算法'
]

module.exports = parsedArticleName(prefix, data);