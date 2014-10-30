'use strict';

var angular = require('angular');

require('./directives');
require('./filters');
require('./services');

angular.module('indeed.components.resumes', [
  'indeed.components.resumes.directives',
  'indeed.components.resumes.filters',
  'indeed.components.resumes.services'
]);
