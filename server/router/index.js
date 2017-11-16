// const router = require('koa-router')({
//   prefix: '/api'
// })
const router = require('koa-router')()
const viewhook = require('../middle/viewhook')

router.get('/test', async function (ctx, next) {
  viewhook(ctx, next)
})

module.exports = router
