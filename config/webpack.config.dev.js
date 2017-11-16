
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const postcsseasysprites = require('postcss-easysprites')

/**
设置默认常用路径
**/
// srcDir为当前开发目录(默认:client/src)
const srcDir = path.resolve(process.cwd(), 'client/src')
// publicDir为当前建立目录(默认:/public)
const assetsDir = path.resolve(process.cwd(), 'public/')

// 生成JS的目录地址(默认:)
const jsDir = 'dist/js/'
// css的目录地址(默认:)
const cssDir = 'static/css/'

const config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    // index: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index.js']
    index: [
      'react-hot-loader/patch', 'webpack-dev-server/client?http://0.0.0.0:5000', 'webpack/hot/only-dev-server', './client/src/index.js'
    ]
  },
  output: {
    path: assetsDir,
    filename: jsDir + '[name].js',
    publicPath: 'http://localhost:5000/' //  / => 修改 http://localhost:5000/
  },
  module: {
    // 加载器配置
    rules: [
      {
        test: /\.scss|.css$/,
        include: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:3]',
              importLoaders: 1,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: ['last 3 version', 'ie >= 10']
                }),
                postcsseasysprites({ imagePath: '../img', spritePath: './client/assets/dist/img' })
              ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.scss|.css$/,
        exclude: [path.resolve(srcDir, cssDir)],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                autoprefixer({
                  browsers: ['last 3 version', 'ie >= 10']
                }),
                postcsseasysprites({ imagePath: '../img', spritePath: './client/assets/dist/img' })
              ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.js$/,
        include: srcDir,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
            // options: {
            //     presets: ['react-hmre']
            // }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        include: srcDir,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'dist/img/[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
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
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: [
    //     'vendor', 'manifest'
    //   ],
    //   filename: jsDir + '[name].js'
    // }),
    new AssetsPlugin({
      filename: 'config/assets.json',
      prettyPrint: true,
      update: true
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config
