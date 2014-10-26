'use strict';

var angular = require('angular');

require('./directives');
require('./services');

angular.module('indeed.components.google-analytics', [
  'indeed.components.google-analytics.directives',
  'indeed.components.google-analytics.services'
]);
