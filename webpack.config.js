const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.js',
  output: {
    // path: path.resolve('dist'),
    // filename: 'index.js',
    path: path.resolve('dist'),
    filename: "index.js",
    library: "PhaserGridEditor",
    libraryTarget: "var" //See below
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   exclude: /(node_modules)/,
      //   use: 'babel-loader',
      // },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@initializers': path.resolve(__dirname, 'src/initializers/'),
      '@scenes': path.resolve(__dirname, 'src/scenes/'),
      '@scripts': path.resolve(__dirname, 'src/scripts/'),
    }
  },
};
