const { parsedArticleName } = require('../lib');

const prefix = '/note/';
const data = [
    '文化苦旅',
    '兄弟',
    '在细雨中呐喊',
    '活着',
    '草房子',
    '沉默的大多数'
]

module.exports = parsedArticleName(prefix, data);