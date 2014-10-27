'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.directives', []);

app.directive('resumeFilter', ['$document', 'api', function ($document, api) {
  return {
    link: function (scope, element, attributes) {

      api('/api/resumes').success(function (resumes) {
        scope.resumes = resumes;
      }).error(function (err) {
        scope.resumes = [];
      });
    },
    scope: true,
    templateUrl: '/ng/components/resumes/index.html'
  };
}]);
