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
  devServer: {
     contentBase: './public'
  },
    entry: ['./client/index.js'],
    output: {
        path: outputPath,
        filename: 'public/bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.scss$/,
            use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader",
              options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
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
            { test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /(node_modules|server)/,
                query: {
                    presets: ['es2015', 'react'],
                },
            },
          {
            test: /\.sass$/,
            loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
          }
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
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
