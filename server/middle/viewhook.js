import React from 'react'
import ReactDOMServer from 'react-dom/server'
import fs from 'fs'
import path from 'path'

import Isomorph from '../../client/src/Iso'
const log4js = require('./logger')
const logger = log4js.getLogger('app')

function renderHtml (content, data, common) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='renderer' content='webkit'/>
      <meta name='keywords' content='demo'/>
      <meta name='description' content='demo'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel="stylesheet" href=${common.css || '/'} rel="stylesheet">
    </head>
    <body>
      <div id="root"><div>${content}</div></div>
    <script>
    window.__REDUX_DATA__ = ${JSON.stringify(data)};
    </script>
    <script src="dist/dll/vendor.dll.js"></script>
    
    <script src=${common.js}></script>
    </body>
    </html>
  `
}

function viewhook (ctx) {
  const render = ReactDOMServer.renderToString
  const location = {
    pathname: ctx.path
  }
  const json = {}

  const IS_DEV = process.env.NODE_ENV === 'development'
  const fileName = IS_DEV ? '/config/assets.json' : '/config/assets.prod.json'
  const text = fs.readFileSync(path.join(process.cwd(), fileName), 'utf-8')
  Object.assign(json, JSON.parse(text))
  const markup = render(<Isomorph initialState={{}} location={location} />)
  ctx.type = 'html'

  ctx.body = renderHtml(markup, {}, json.index)
}

module.exports = viewhook
