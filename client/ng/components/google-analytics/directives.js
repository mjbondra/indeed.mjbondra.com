'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.google-analytics.directives', []);

app.directive('googleAnalytics', ['$location', 'ga', function ($location, ga) {
  return {
    link: function (scope, element, attributes) {
      if ($location.host() !== 'indeed.mjbondra.com') return;

      ga('create', scope.googleAnalytics, 'auto');
      ga('send', 'pageview');
    },
    scope: {
      googleAnalytics: '@'
    }
  };
}]);
