'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.controllers', []);

app.controller('resumes.index', ['$location', '$scope', 'api', 'ga', function ($location, $scope, api, ga) {
  ga('send', 'pageview', { page: $location.path() });
  api('/api/resumes').success(function (resumes) {
    $scope.resumes = resumes;
  }).error(function () {
    $scope.resumes = [];
  });
}]);

app.controller('resumes.show', ['$location', '$routeParams', '$scope', 'api', 'ga', function ($location, $routeParams, $scope, api, ga) {
  ga('send', 'pageview', { page: $location.path() });
  api('/api/resumes/' + $routeParams.resume).success(function (resume) {
    $scope.resume = resume;
  }).error(function () {
    $scope.resume = [];
  });
}]);
