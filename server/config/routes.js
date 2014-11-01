var send = require('koa-send');

var resumes = require('../components/resumes/controllers');

module.exports = function (app, config) {
  app.get('/api/resumes', resumes.index);
  app.get('/api/resumes/:resumeKey', resumes.show);

  // redirect all remaining GET method routes to angular router
  app.get(/.*/, function *() {
    yield send(this, config.path.static + '/index.html');
  });
};
