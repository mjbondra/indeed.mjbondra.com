'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.controllers', []);

app.controller('resumes.index', ['$scope', 'api', function ($scope, api) {
  api('/api/resumes').success(function (resumes) {
    $scope.resumes = resumes;
  }).error(function () {
    $scope.resumes = [];
  });
}]);

app.controller('resumes.show', ['$routeParams', '$scope', 'api', function ($routeParams, $scope, api) {
  api('/api/resumes/' + $routeParams.resume).success(function (resume) {
    $scope.resume = resume;
  }).error(function () {
    $scope.resume = [];
  });
}]);
