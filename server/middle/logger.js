const log4js = require('koa-log4')
const { log4js: config } = require('../config')

// log4js.configure(config)

// let logger = log4js.getLogger('cheese')
// // logger.level = 'DEBUG'
// logger.level = 'INFO'
// logger.setLevel(debug ? 'DEBUG' : 'ERROR')
log4js.configure(config)
// const log = log4js.getLogger('index')
// const logApp = log4js.getLogger('app')

module.exports = log4js
