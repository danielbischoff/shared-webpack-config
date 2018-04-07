'use strict';
const fs = require('fs');
const paths = require('./paths');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const babelOptions = JSON.parse(fs.readFileSync(paths.babelrc, "utf8"));

const config = {
  mode: 'development',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000/',
    paths.appIndex,
  ],
  output: {
    path: paths.appBuild,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', ]
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [{
        test: /\.jsx?$/,
        include: paths.appSrc,
        use: [{
          loader: 'babel-loader',
          options: babelOptions,
        }, ],
      },
    ]
  },
  plugins: [   
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      title: 'React Mobx Starter',
      inject: 'body'
    })
  ]
};

module.exports = config;