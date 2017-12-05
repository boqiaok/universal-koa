global.Promise = require('bluebird')

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
// const passport = require('koa-passport')
const helmet = require('koa-helmet')
// const multer = require('koa-multer')
// const RedisStore = require('./middle/redisStore')
const render = require('koa-static')
const path = require('path')
// const fs = require('fs')
// const tool = require('./middle/tool')
// const auth = require('./middle/auth')
// const Redis = require('./middle/redis')
const log4js = require('./middle/logger')
const config = require('./config')
const router = require('./router')
const SSR = require('./middle/SSR')
// const priRouter = require('./router/priRoutes')
// require('./middle/db.js')

const app = new Koa()
const logger = log4js.getLogger('app')
// const upload = multer({ dest: 'uploads/' })

app.keys = [config.cookie.name]
app.use(session({
  key: config.session.secret,
  // store: new RedisStore(),
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false
}, app))

app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
app.use(bodyParser())
app.use(helmet({ frameguard: { action: 'sameorigin' } }))

// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

app.use(SSR())
app.use(render(path.join(process.cwd(), 'public')))
// app.use(auth.authUser)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.port, () => {
  logger.info('running localhost：' + config.port)
  logger.info(`You can debug your app with http://${config.host}:${config.port}`)
})

module.exports = app
