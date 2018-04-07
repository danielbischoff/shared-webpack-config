'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.prod.config.js');

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details.join('\n\n'));
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors.join('\n\n'));
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings.join('\n\n'));
  }
});