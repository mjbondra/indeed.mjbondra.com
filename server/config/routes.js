var resumes = require('../app/controllers/resumes');

module.exports = function (app) {
  app.get('/api/resumes', resumes.index);
  app.get('/api/resumes/:resumeKey', resumes.show);
};
