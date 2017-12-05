'use strict';

global.Promise = require('bluebird');

var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
// const passport = require('koa-passport')
var helmet = require('koa-helmet');
// const multer = require('koa-multer')
// const RedisStore = require('./middle/redisStore')
var render = require('koa-static');
var path = require('path');
// const fs = require('fs')
// const tool = require('./middle/tool')
// const auth = require('./middle/auth')
// const Redis = require('./middle/redis')
var log4js = require('./middle/logger');
var config = require('./config');
var router = require('./router');
var SSR = require('./middle/SSR');
// const priRouter = require('./router/priRoutes')
// require('./middle/db.js')

var app = new Koa();
var logger = log4js.getLogger('app');
// const upload = multer({ dest: 'uploads/' })

app.keys = [config.cookie.name];
app.use(session({
  key: config.session.secret,
  // store: new RedisStore(),
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false
}, app));

app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }));
app.use(bodyParser());
app.use(helmet({ frameguard: { action: 'sameorigin' } }));

// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

app.use(SSR());
app.use(render(path.join(process.cwd(), 'public')));
// app.use(auth.authUser)
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port, function () {
  logger.info('running localhost：' + config.port);
  logger.info('You can debug your app with http://' + config.host + ':' + config.port);
});

module.exports = app;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'server/index.js');

  __REACT_HOT_LOADER__.register(logger, 'logger', 'server/index.js');
}();

;