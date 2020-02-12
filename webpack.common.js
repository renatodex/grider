const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/index.js',
  output: {
    // Should be overridden
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@initializers': path.resolve(__dirname, 'src/initializers/'),
      '@scenes': path.resolve(__dirname, 'src/scenes/'),
      '@scripts': path.resolve(__dirname, 'src/scripts/'),
    }
  },
}
