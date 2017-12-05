/**
 * config
 */
const path = require('path')

module.exports = {
  // debug 为 true 时，用于本地调试
  publicPath: '/',
  debug: false,
  log4js: {
    appenders: [
      {
        'type': 'console'
      },
      {
        'type': 'clustered',
        'appenders': [
          {
            'type': 'dateFile',
            'filename': './logs/startup.log',
            'pattern': '-yyyy-MM-dd',
            'category': 'startup'
          },
          {
            'type': 'dateFile',
            'filename': './logs/http.log',
            'pattern': '-yyyy-MM-dd',
            'category': 'http'
          },
          {
            'type': 'file',
            'filename': './logs/app.log',
            'maxLogSize': 10485760,
            'numBackups': 5
          },
          {
            'type': 'logLevelFilter',
            'level': 'ERROR',
            'appender': {
              'type': 'file',
              'filename': './logs/errors.log'
            }
          }
        ]
      }
    ]
  },
  logger: {
    appenders: { cheese: { type: 'file', filename: '../logs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
  },
  redis: {
    host: '127.0.0.1',
    port: 16975,
    db: 0
  },
  // mongodb 配置
  db: {
    url: 'mongodb://127.0.0.1/api_blog',
    // url: 'mongodb://nodeApi:nodeApi@ds157282.mlab.com:57282/node',
    options: { poolSize: 20, useMongoClient: true }
  },
  viewPath: path.join(__dirname, '../app/view'),
  staticPath: path.join(__dirname, '../app/public'),
  // assets = require('./assets.json');
  assets: {},

  host: 'localhost', // 社区的域名
  port: process.env.PORT || require(path.join(process.cwd(), 'common.json')).serverPort, // 程序运行的端口

  session: {
    secret: 'bo_blog_api' // 务必修改
  },
  cookie: {
    name: 'bo_blog',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 30,
    signed: true,
    httpOnly: true
  }
}
