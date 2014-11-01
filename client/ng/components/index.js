'use strict';

var angular = require('angular');

require('./google-analytics');
require('./head');
require('./resumes');

angular.module('indeed.components', [
  'indeed.components.google-analytics',
  'indeed.components.head',
  'indeed.components.resumes'
]);
