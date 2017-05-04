const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const assetPath = '/assets/'
const absolutePath = path.join(__dirname, 'build', assetPath);

const loadersRules = [{
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      //resolve-url-loader may be chained before sass-loader if necessary
      use: ['css-loader', 'sass-loader']
    })
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  },
  {
    test: /\.jsx$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  }
];

const config = {
  context: __dirname + "/app",
  entry: [
    'webpack-hot-middleware/client',
    './main'
  ],
  output: {
    path: absolutePath,
    filename: 'bundle.js',
    publicPath: assetPath
  },
  devtool: "#source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: loadersRules
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/main.css",
      disable: false,
      allChunks: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  watch: true,
  stats: {
    colors: true
  }
  // options for formating the statistics
}

module.exports = config;
