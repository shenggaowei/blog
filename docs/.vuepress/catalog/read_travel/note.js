const { parsedArticleName } = require('../lib');

const prefix = '/note/';
const data = [
    '文化苦旅',
    '兄弟',
    '在细雨中呐喊',
    '活着'
]

module.exports = parsedArticleName(prefix, data);