const path = require('path');

console.log(path.resolve(__dirname, '../public/assets/img'));

module.exports = {
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, '../public/assets/img')
    }
  }
}