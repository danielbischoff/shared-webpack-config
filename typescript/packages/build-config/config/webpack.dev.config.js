'use strict';
const paths = require('./paths');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: "development",
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000/',
    paths.appIndexTsx,
  ],
  output: {
    path: paths.appBuild,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [{
        test: /\.tsx?$/,
        include: paths.appSrc,
        use: [{
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true,
            context: paths.appPath,
            configFile: paths.appTsConfig,
          },
        }],
      },
    ],
  },
  plugins: [    
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      title: 'React Mobx Starter',
      inject: 'body'
    }),
  ]
};

module.exports = config;