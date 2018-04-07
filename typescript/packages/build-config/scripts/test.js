'use strict';
process.env.NODE_ENV = 'test';

const jest = require('jest');
const argv = process.argv.slice(2);

const config = require('../config/jest.config');
const path = require('path');
const paths = require('../config/paths');
argv.push(
  '--config',
  JSON.stringify(config)
);

jest.run(argv);