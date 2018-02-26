const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const outputPath = path.join(__dirname, 'public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

process.env.NODE_ENV = 'development';
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./client/index.js'],
  output: {
    path: outputPath,
    filename: 'public/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b']
          }
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|server)/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules|server)/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/images/[name]_[hash:7].[ext]'
          }
        }]
      }

    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('public/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false,
      },
    }),
  ],
};
