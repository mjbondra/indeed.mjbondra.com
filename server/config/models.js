// models, in load order
var models = [
  'resume'
];

module.exports = function (config) {
  var modelsPath = config.path.root + '/server/app/models/';
  models.forEach(function (model) {
    require(modelsPath + model);
  });
};