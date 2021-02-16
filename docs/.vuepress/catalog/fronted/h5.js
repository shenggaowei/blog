const { parsedArticleName } = require('../lib');

const prefix = '/fronted/h5/';
const data = [
  'canvas',
]

module.exports = parsedArticleName(prefix, data);