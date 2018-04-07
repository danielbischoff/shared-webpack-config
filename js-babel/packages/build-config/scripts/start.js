'use strict';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.config');
const devServerConfig = require('../config/devServer.config.js');

const HOST = '127.0.0.1';
const PORT = '9000';

const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(PORT, HOST, err => {
  if (err) {
    return console.log(err);
  }

  console.log('starting the dev server...');
  console.log(`dev server listening on http://${HOST}:${PORT}`);
});


['SIGINT', 'SIGTERM'].forEach(function(sig) {
  process.on(sig, function() {
    devServer.close();
    process.exit();
  });
});
