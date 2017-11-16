'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.Promise = require('bluebird');

var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
// const passport = require('koa-passport')
var helmet = require('koa-helmet');
var multer = require('koa-multer');
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
// const priRouter = require('./router/priRoutes')
// require('./middle/db.js')

var app = new Koa();
var logger = log4js.getLogger('app');
var upload = multer({ dest: 'uploads/' });

app.keys = [config.cookie.name];
app.use(helmet({ frameguard: { action: 'sameorigin' } }));
app.use(session({
  key: config.session.secret,
  // store: new RedisStore(),
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false
}, app));

app.use(render(path.join(process.cwd(), 'public')));
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }));
app.use(bodyParser());

app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
    var start, ms;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;

            logger.info(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

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

  __REACT_HOT_LOADER__.register(upload, 'upload', 'server/index.js');
}();

;