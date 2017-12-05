const path = require('path')
const webpack = require('webpack')

/**
设置默认常用路径
**/
// srcDir为当前开发目录(默认:/src)
const srcDir = path.resolve(process.cwd(), 'client/src')
// assetsDir为当前建立目录(默认:/assets)
const assetsDir = path.resolve(process.cwd(), 'public')
// 生成JS的目录地址(默认:)
const jsDir = 'dist/dll/'
// 生成css的目录地址(默认:)
const cssDir = 'dist/css/'
// 载入默认配置
const common = require('../common.json')

const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'react-router-dom',
  'axios',
  'immutable',
  'redux-actions',
  'redux-immutable'
]
const config = {
  devtool: 'hidden-source-map',
  entry: {
    vendor: vendor
  },
  output: {
    path: assetsDir,
    filename: jsDir + '[name].dll.js',
    publicPath: common.publicPath,
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    })
  ]
}

module.exports = config
