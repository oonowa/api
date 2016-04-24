'use strict';

require('..');

var chai = require('chai');
chai.use(require('chai-as-promised'));
global.expect = chai.expect;

global.Agent = require('supertest-as-promised');
