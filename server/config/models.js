// bootstrap models by specifying component names in preferred load order
var models = [
  'resumes'
];

module.exports = function (config) {
  var componentsPath = config.path.root + '/server/components/';
  models.forEach(function (component) {
    require(componentsPath + component + '/model');
  });
};
