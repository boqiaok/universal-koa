// const router = require('koa-router')({
//   prefix: '/api'
// })
const router = require('koa-router')()

router.get('/', async function (ctx, next) {
  console.log('-----------')
  await ctx.render()
})

router.get('/test', async function (ctx, next) {
  await ctx.render()
})

router.get('/404', async function (ctx, next) {
  await ctx.render()
})

router.get('*', async function (ctx, next) {
  await ctx.render()
})

module.exports = router
