/**  _           _               _
 *  (_)         | |             | |
 *   _ _ __   __| | ___  ___  __| |
 *  | | '_ \ / _` |/ _ \/ _ \/ _` |
 *  | | | | | (_| |  __/  __/ (_| |
 *  |_|_| |_|\__,_|\___|\___|\__,_|
 *
 *  A sample Koa/AngularJS app for filtering indeed.com resume data
 */

/**
 * Koa core
 */
var koa = require('koa')
  , app = koa();

// use environment-specific configuration; default to 'development' if unspecified
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env];

require('./config/mongoose')(config);
require('./config/models')(config);
require('./config/koa')(app, config);
require('./config/routes')(app);

app.listen(config.port, function () {
  console.log('Listening for Connections', { port: config.port });
});
