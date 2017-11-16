const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// const fs = require('fs-extra')
const config = require('./webpack.config.dev')
const common = require('../common.json')

var creatServer = () => {
  // 调用webpack热加载模块及对应参数
  let app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // proxy: common.proxy,
    stats: {
      colors: true // 用颜色标识
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  // 调用开启端口用来测试和开发
  app.listen(common.clientPort, function (err) {
    if (err) {
      console.log(err)
    }
    // fs.copy( // 需要替换index.html 内容
    //   path.resolve(__dirname, '../client/index.html'),
    //   path.resolve(__dirname, '../public/index.html')
    // )
    console.log('Listening at localhost:' + common.clientPort)
  })
}

// 调用创建koa服务器方法
creatServer()
