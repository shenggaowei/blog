const { parsedArticleName } = require('../lib');

const prefix = '/note/';
const data = [
    '文化苦旅'
]

module.exports = parsedArticleName(prefix, data);