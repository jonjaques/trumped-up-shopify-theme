var Webpack = require('webpack')
var Path = require('path')

module.exports = function(env) {
  var browser = {
    context: __dirname + '/src',
    devtool: 'inline-source-map',
    devServer: {
      public: 'trumped-up.ngrok.io',
      publicPath: '/public/',
      compress: true,
      port: 9000,
      hot: true,
      inline: true
    },
    entry: {
      app: [
        'react-hot-loader/patch',
        './app'
      ]
    },
    resolve: {
      alias: {
        core: Path.resolve('src/core'),
        connectors: Path.resolve('src/app/connectors'),
        components: Path.resolve('src/app/components'),
        ducks: Path.resolve('src/app/ducks'),
      }
    },
    output: {
      filename: '[name].js',
      path: Path.resolve('theme/assets'),
      publicPath: 'https://trumped-up.ngrok.io/public/',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [

    ]
  }

  return [browser]
}
