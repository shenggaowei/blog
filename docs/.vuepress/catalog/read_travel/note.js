const { parsedArticleName } = require('../lib');

const prefix = '/note/';
const data = [
    '文化苦旅',
    '兄弟'
]

module.exports = parsedArticleName(prefix, data);