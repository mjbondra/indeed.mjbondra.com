var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var dateSchema = { // date schema
  displayDate: String,
  granularity: String,
  isoDate: Date
}, dateRangeSchema = { // date range schema
  displayDateRange: String,
  endDate: dateSchema,
  startDate: dateSchema
}, recordSchema = { // record schema
  dateRange: dateRangeSchema,
  description: String,
  title: String
};

var ResumeSchema = new Schema({
  additionalInfo: String,
  awards: [
    recordSchema
  ],
  certifications: [
    recordSchema
  ],
  city: String,
  dateCreated: dateSchema,
  educations: [{
    dateRange: dateRangeSchema,
    degree: String,
    field: String,
    location: String,
    school: String
  }],
  firstName: String,
  groups: [
    recordSchema
  ],
  headline: String,
  lastName: String,
  links: [{
    url: String
  }],
  militaryBackground: Boolean,
  militaryExperiences: [{
    branch: String,
    commendations: String,
    dateRange: dateRangeSchema,
    description: String,
    rank: String,
    serviceCountry: String
  }],
  patents: [{
    date: dateSchema,
    descriptions: String,
    patentNumber: String,
    title: String,
    url: String
  }],
  publications: [{
    date: dateSchema,
    description: String,
    title: String,
    url: String
  }],
  resumeKey: {
    index: {
      unique: true
    },
    type: String
  },
  skills: String,
  summary: String,
  url: String,
  workExperiences: [{
    company: String,
    dateRange: dateRangeSchema,
    description: String,
    location: String,
    title: String
  }]
});

mongoose.model('Resume', ResumeSchema);
