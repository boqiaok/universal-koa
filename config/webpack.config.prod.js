const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const postcsseasysprites = require('postcss-easysprites')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

const extractSass = new ExtractTextPlugin({
  filename: 'dist/css/[name].min.[hash:8].css',
  allChunks: true
})

/**
设置默认常用路径
**/
// srcDir为当前开发目录(默认:/client)
const srcDir = path.resolve(process.cwd(), 'client/src')
// assetsDir为当前建立目录(默认:/public)
const assetsDir = path.resolve(process.cwd(), 'public')
// 生成JS的目录地址(默认:)
const jsDir = 'dist/js/'
// css的目录地址(默认:)
const cssDir = 'static/css/'
// 载入默认配置
const common = require('../common.json')

const config = {
  cache: false,
  devtool: 'hidden-source-map',
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: assetsDir,
    filename: jsDir + '[name][hash:8].js',
    publicPath: common.publicPath
  },
  module: {
    // 加载器配置
    rules: [{
      test: /\.scss|.css$/,
      include: [path.resolve(srcDir, cssDir)],
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[name]_[local]_[hash:base64:3]',
            importLoaders: 1,
            sourceMap: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            plugins: () => [
              precss(),
              autoprefixer({
                browsers: ['last 3 version', 'ie >= 10']
              }),
              postcsseasysprites({
                imagePath: '../img',
                spritePath: './public/dist/img'
              })
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }]
      })
    }, {
      test: /\.scss|.css$/,
      exclude: [path.resolve(srcDir, cssDir)],
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            plugins: () => [
              precss(),
              autoprefixer({
                browsers: ['last 3 version', 'ie >= 10']
              }),
              postcsseasysprites({
                imagePath: '../img',
                spritePath: './public/dist/img'
              })
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }]
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      include: srcDir,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }]
    },
    //  {
    //   test: /\.(png|jpeg|jpg|gif|svg)$/,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       name: 'dist/img/[name].[ext]'
    //     }
    //   }]
    // }
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      include: srcDir,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'dist/img/[hash:8].[ext]'
        }
      }
    }]
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new AssetsPlugin({
      filename: 'config/assets.prod.json',
      prettyPrint: true,
      update: true
    }),
    new HtmlWebpackPlugin({
      template: 'config/index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      },
      chunks: [
        'index', 'vendor', 'manifest'
      ],
      filename: 'index.html'
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, './vendor-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../public/dist/dll/vendor.dll.js'),
      hash: true,
      includeSourcemap: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: [
    //     'vendor', 'manifest'
    //   ],
    //   filename: jsDir + '[name].js'
    // }),
    new UglifyJsPlugin({
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
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports = config
