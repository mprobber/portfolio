const build = require('static-build');
const { resolve } = require('path');

module.exports = build({
  entry: resolve(__dirname, 'index.js'),
  template: resolve(__dirname, 'index.html'),
  favicon: resolve(__dirname, 'assets', 'favicon.ico'),
  name: 'portfolio',
});
