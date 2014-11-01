'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.head.directives', []);

app.directive('getTitle', ['title', function (title) {
  return {
    link: function (scope) {
      scope.title = function () {
        return title.get();
      };
    }
  };
}]);

app.directive('setTitle', ['title', function (title) {
  return {
    link: function (scope, element) {
      element.ready(function () {
        title.set(scope.setTitle || element.text());
        scope.$apply();
      });
    },
    scope: {
      setTitle: '@'
    }
  };
}]);
