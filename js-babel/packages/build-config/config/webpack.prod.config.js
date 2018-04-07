const fs = require('fs');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = JSON.parse(fs.readFileSync(paths.babelrc, "utf8"));

module.exports = {
  mode: 'production',
  entry: paths.appIndex,
  output: {
    path: paths.appBuild,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: paths.appSrc,
      use: [{
        loader: 'babel-loader',
        options: babelOptions,
      }, ],
    }, ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
  ]
};