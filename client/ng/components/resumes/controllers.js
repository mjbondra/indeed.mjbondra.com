'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.controllers', []);

app.controller('resumes.index', ['$scope', 'api', function ($scope, api) {
  api('/api/resumes').success(function (resumes) {
    $scope.resumes = resumes;
  }).error(function () {
    $scope.resumes = [];
  });
  $scope.clearFilters = function () {
    $scope.search = {};
    $scope.searchEducation = {};
    $scope.searchWork = {};
  };
}]);

app.controller('resumes.show', ['$location', '$routeParams', '$scope', 'api', function ($location, $routeParams, $scope, api) {
  api('/api/resumes/' + $routeParams.resume).success(function (resume) {
    $scope.resume = resume;
  }).error(function () {
    $location.path('/');
  });
}]);
