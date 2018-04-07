'use strict';
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "production",
  entry: paths.appIndexTsx,
  output: {
    path: paths.appBuild,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.appSrc,
        use: [
          {            
            loader: 'ts-loader',   
            options: {
              onlyCompileBundledFiles: true,
              context: paths.appPath,
              configFile: paths.appTsConfig,
            },        
          },
        ],
      },
    ],
  },
  plugins: [    
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      title: 'React Mobx Starter',
      inject: 'body',
    })
  ]
};

module.exports = config;