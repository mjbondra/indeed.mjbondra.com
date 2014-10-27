'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.filters', []);

app.filter('displayEducation', [function () {
  return function (education) {
    var output = education.degree ? education.degree + ', ' : '';
    output += education.field;
    if (education.field && education.school)
      output += ' at ';
    output += education.school;
    if (education.dateRange && education.dateRange.displayDateRange)
      output += ', ' + education.dateRange.displayDateRange;
    return output;
  };
}]);

app.filter('displayName', [function () {
  return function (resume) {
    var output = resume.firstName;
    if (resume.firstName && resume.lastName) output += ' ';
    output += resume.lastName;
    return output;
  };
}]);

app.filter('displayWork', [function () {
  return function (work) {
    var output = work.title;
    if (work.title && work.company) output += ' at ';
    output += work.company;
    if (work.dateRange && work.dateRange.displayDateRange)
      output += ', ' + work.dateRange.displayDateRange;
    return output;
  };
}]);
