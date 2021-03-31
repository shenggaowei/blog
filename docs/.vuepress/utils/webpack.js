const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, '../public/assets/img')
    }
  }
}