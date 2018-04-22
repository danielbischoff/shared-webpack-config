'use strict';
process.env.NODE_ENV = 'test';

const jest = require('jest');
const paths = require('../config/paths');

const argv = [];
argv.push('--config', paths.jestConfig);
argv.push('--no-cache');

jest.run(argv);
