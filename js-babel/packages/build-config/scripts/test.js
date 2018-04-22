'use strict';
process.env.NODE_ENV = 'test';

const jest = require('jest');
const paths = require('../config/paths');

const argv = [];
argv.push('--config', paths.jestConfig);

jest.run(argv);
