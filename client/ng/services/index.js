'use strict';

var angular = require('angular');

require('./api');

angular.module('indeed.services', [
  'indeed.services.api'
]);
