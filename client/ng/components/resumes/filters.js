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
    if (resume.firstName && resume.lastName)
      output += ' ';
    output += resume.lastName;
    return output;
  };
}]);

app.filter('displayWork', [function () {
  return function (work) {
    var output = work.title;
    if (work.title && work.company)
      output += ' at ';
    output += work.company;
    if (work.location)
      output += ', ' + work.location;
    if (work.dateRange && work.dateRange.displayDateRange)
      output += ', ' + work.dateRange.displayDateRange;
    return output;
  };
}]);

app.filter('searchEducation', ['combineResumeMatches', 'degreeTokens', function (combineResumeMatches, degreeTokens) {
  return function (resumes, filters) {
    if (!filters) return resumes;
    var degree, education, foundDegree, foundSchool, k, school
      , filtersDegree = filters.degree ?
          filters.degree :
          ''
      , filtersSchool = filters.school ?
          filters.school.toLowerCase().replace(/\./g,'') :
          ''
      , i = resumes.length
      , matchesDegree = []
      , matchesSchool = [];
    while (i--) {
      education = resumes[i].educations;
      foundDegree = false;
      foundSchool = false;
      k = education.length;
      while (k--) {
        degree = education[k].degree ?
          education[k].degree.toLowerCase().replace(/\./g,'') :
          '';
        school = education[k].school ?
          education[k].school.toLowerCase().replace(/\./g,'') :
          '';
        if (
          filtersDegree &&
          foundDegree === false &&
          degreeTokens[filtersDegree].indexOf(degree) >= 0
        ) {
          matchesDegree.push(resumes[i]);
          foundDegree = true;
        }
        if (
          filtersSchool &&
          foundSchool === false &&
          school.indexOf(filtersSchool) >= 0
        ) {
          matchesSchool.push(resumes[i]);
          foundSchool = true;
        }
      }
    }
    return filtersDegree && filtersSchool ?
      combineResumeMatches(matchesDegree, matchesSchool) :
      filtersDegree ?
        matchesDegree :
        filtersSchool ?
          matchesSchool :
          resumes;
  };
}]);

app.filter('searchWork', [function () {
  return function (resumes, filters) {
    if (!filters) return resumes;
    var company, k, location, work
      , filtersCompany = filters.company ?
          filters.company :
          ''
      , filtersLocation = filters.location ?
          filters.location :
          ''
      , i = resumes.length
      , matches = [];
    while (i--) {
      work = resumes[i].workExperiences;
      k = work.length;
      while (k--) {
        company = work[k].company;
        location = work[k].location;
        if (
          (
            (
              filtersCompany &&
              company.indexOf(filtersCompany) >= 0
            ) && (
              filtersLocation &&
              location.indexOf(filtersLocation) >= 0
            )
          ) || (
            (
              filtersCompany &&
              company.indexOf(filtersCompany) >= 0 &&
              !filtersLocation
            ) || (
              filtersLocation &&
              location.indexOf(filtersLocation) >= 0 &&
              !filtersCompany
            )
          )
        ) {
          matches.push(resumes[i]);
          k = 0; // terminate while loop of workExperiences
        }
      }
    }
    return filtersCompany || filtersLocation ?
      matches :
      resumes;
  };
}]);
