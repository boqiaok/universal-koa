// const config = require('../../config/config')
// const { User } = require('../services/index')
// const { UserModel } = require('../model')

// module.exports = {
//   authUser: async(ctx, next) => {
//     let user = ctx.session.user
//     const authToken = ctx.cookies.get(config.cookie.name, { signed: true })

//     if (!user && authToken) {
//       const id = authToken.split('$$$$')[0]
//       if (id) {
//         user = await User.getById(id)
//       }
//     }

//     if (user) {
//       user = ctx.session.user = new UserModel(user)
//     }

//     await next()
//   },
//   userRequired: async(ctx, next) => {
//     const { user } = ctx.session
//     if (!user) {
//       return ctx.redirect('/')
//     }
//     return await next()
//   }
// }
