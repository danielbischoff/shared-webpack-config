'use strict';
const paths = require('./paths');

module.exports = {
  rootDir: paths.appPath,
  setupTestFrameworkScriptFile: paths.testsSetup,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  transform: { '^.+\\.(js|jsx)$': paths.jestPreprocessor },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      paths.testFileMock
  }
};
