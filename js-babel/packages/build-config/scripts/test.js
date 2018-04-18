'use strict';
process.env.NODE_ENV = 'test';

const jest = require('jest');

const config = require('../config/jest.config');
const path = require('path');
const paths = require('../config/paths');

const argv = [];
argv.push('--config', JSON.stringify(config));
argv.push('--no-cache');

jest.run(argv);
