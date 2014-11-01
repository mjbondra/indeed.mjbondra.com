'use strict';

require('angular-route');
var angular = require('angular')
  , app = angular.module('indeed.config.routes', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: '/ng/components/resumes/index.html',
    controller: 'resumes.index'
  });
  $routeProvider.when('/:resume', {
    templateUrl: '/ng/components/resumes/show.html',
    controller: 'resumes.show'
  });

  // default route
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
