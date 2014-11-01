'use strict';

/**  _           _               _
 *  (_)         | |             | |
 *   _ _ __   __| | ___  ___  __| |
 *  | | '_ \ / _` |/ _ \/ _ \/ _` |
 *  | | | | | (_| |  __/  __/ (_| |
 *  |_|_| |_|\__,_|\___|\___|\__,_|
 *
 *  A sample Koa/AngularJS app for filtering indeed.com resume data
 */

var angular = require('angular');

// App Dependencies
require('./components');
require('./config');
require('./services');

// AngularJS/App modules
angular.module('indeed', [
  'indeed.components',
  'indeed.config',
  'indeed.services'
]);
