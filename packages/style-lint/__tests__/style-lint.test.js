'use strict';

const styleLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(styleLint(), 'Hello from styleLint');
console.info('styleLint tests passed');
