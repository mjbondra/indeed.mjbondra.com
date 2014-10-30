'use strict';

var angular = require('angular')
  , app = angular.module('indeed.components.resumes.services', []);

app.constant('degreeTokens', {
  bachelors: ['ba','bs','bba','bse'],
  doctorate: ['phd'],
  masters: ['ma','ms','mba','mcs', 'mse']
});

app.factory('combineResumeMatches', [function () {
  return function (arr1, arr2) {
    var arrLong, arrShort, i
      , results = [];
    if (arr1.length >= arr2.length) {
      arrLong = arr1;
      arrShort = arr2;
    } else {
      arrLong = arr2;
      arrShort = arr1;
    }
    i = arrShort.length;
    while (i--)
      if (arrLong.indexOf(arrShort[i]) >= 0)
        results.push(arrShort[i]);
    return results;
  };
}]);
