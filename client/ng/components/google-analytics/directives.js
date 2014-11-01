'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.google-analytics.directives', []);

app.directive('googleAnalytics', ['$location', 'ga', function ($location, ga) {
  return {
    link: function (scope) {
      ga('create', scope.googleAnalytics, 'auto');
    },
    scope: {
      googleAnalytics: '@'
    }
  };
}]);
