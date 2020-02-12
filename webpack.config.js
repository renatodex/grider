const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'grider-var.js',
    library: "Grider",
    libraryTarget: 'var'
  },
  devtool: 'inline-source-map',
});
