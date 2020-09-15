const { parsedArticleName } = require('../lib');

const prefix = '/backend/pm2/';
const data = [
  'pm2基础'
]

module.exports = parsedArticleName(prefix, data);