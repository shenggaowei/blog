const { parsedArticleName } = require('../lib');

const prefix = '/backend/node/';
const data = [
    'nvm',
]

module.exports = parsedArticleName(prefix, data);