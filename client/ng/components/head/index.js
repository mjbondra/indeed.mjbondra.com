'use strict';

var angular = require('angular');

require('./directives');
require('./services');

angular.module('indeed.components.head', [
  'indeed.components.head.directives',
  'indeed.components.head.services'
]);
