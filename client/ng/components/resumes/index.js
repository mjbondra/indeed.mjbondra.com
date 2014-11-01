'use strict';

var angular = require('angular');

require('./controllers');
require('./filters');
require('./services');

angular.module('indeed.components.resumes', [
  'indeed.components.resumes.controllers',
  'indeed.components.resumes.filters',
  'indeed.components.resumes.services'
]);
