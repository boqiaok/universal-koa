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
  'axios'
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
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = config
