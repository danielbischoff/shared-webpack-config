const fs = require('fs');
const paths = require('../config/paths');

const babelOptions = JSON.parse(fs.readFileSync(paths.babelrc, 'utf8'));
module.exports = require('babel-jest').createTransformer(babelOptions);
