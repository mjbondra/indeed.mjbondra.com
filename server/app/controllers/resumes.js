var mongoose = require('mongoose')
  , Bluebird = require('bluebird');

var Resume = mongoose.model('Resume');

exports.index = function *() {
  this.body = yield Bluebird.promisify(Resume.find, Resume)();
};

exports.show = function *(next) {
  var resume = yield Bluebird.promisify(Resume.findOne, Resume)({ resumeKey: this.params.resumeKey });
  if (!resume) return yield next;
  this.body = resume;
};
