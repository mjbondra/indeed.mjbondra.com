/** LOCALIZE CONFIGURATION AND RENAME TO 'config.js' */

var path = require('path')
  , port = process.env.PORT || 9998
  , root = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    env: 'development',
    mongo: {
      host: 'localhost',
      db: 'indeed_dev'
    },
    path: {
      root: root,
      static: root + '/client'
    },
    port: port,
    secrets: ['secretString']
  },
  test: {
    env: 'test',
    mongo: {
      host: 'localhost',
      db: 'indeed_test'
    },
    path: {
      root: root,
      static: root + '/client'
    },
    port: port,
    secrets: ['secretString']
  },
  production: {
    env: 'production',
    mongo: {
      host: 'localhost',
      db: 'indeed_prod'
    },
    path: {
      root: root,
      static: root + '/client'
    },
    port: port,
    secrets: ['secretString']
  },
};
