'use strict';

var log4js = require('koa-log4');

var _require = require('../config'),
    debug = _require.debug,
    config = _require.log4js;

// log4js.configure(config)

// let logger = log4js.getLogger('cheese')
// // logger.level = 'DEBUG'
// logger.level = 'INFO'
// logger.setLevel(debug ? 'DEBUG' : 'ERROR')


log4js.configure(config);
// const log = log4js.getLogger('index')
// const logApp = log4js.getLogger('app')

module.exports = log4js;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;