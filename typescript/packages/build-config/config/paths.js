'use strict';
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appHtml: resolveApp('src/index.html'),
  appIndexTsx: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src'),
  appTsConfig: path.resolve(__dirname, 'tsconfig.json'),
  jestConfig: path.resolve(__dirname, 'jest.config.js'),
  testsSetup: path.resolve(__dirname, '../test/setupTests.js'),
  testFileMock: path.resolve(__dirname, '../test/fileMock.js'),
};
