const path = require('path');

function buildConfig({ target, filename }) {
  return {
    target: 'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: filename,
      library: "PhaserGridEditor",
      libraryTarget: target
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
}

module.exports = [
  buildConfig({ target: 'var', filename: 'phasergrideditor-var.js'}),
  buildConfig({ target: 'commonjs2', filename: 'phasergrideditor-commonjs2.js'}),
  buildConfig({ target: 'umd', filename: 'phasergrideditor-umd.js'}),
  buildConfig({ target: 'amd', filename: 'phasergrideditor-amd.js'}),
]
