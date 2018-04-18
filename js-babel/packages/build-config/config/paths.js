'use strict';
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveTest = relativePath =>
  path.resolve(__dirname, '../test/', relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appIndex: resolveApp('src/index.jsx'),
  appHtml: resolveApp('src/index.html'),
  appSrc: resolveApp('src'),
  babelrc: path.resolve(__dirname, '../.babelrc'),
  testsSetup: resolveTest('setupTests.js'),
  testFileMock: resolveTest('fileMock.js'),
  jestPreprocessor: resolveTest('jestPreprocessor.js')
};
