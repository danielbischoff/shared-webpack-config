'use strict';
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appIndex: resolveApp('src/index.jsx'),
  appHtml: resolveApp('src/index.html'),
  appSrc: resolveApp('src'),
  babelrc: path.resolve(__dirname, '../.babelrc'),
  testsSetup: path.resolve(__dirname, '../test/setupTests.js'),
  testFileMock: path.resolve(__dirname, '../test/fileMock.js'),
};