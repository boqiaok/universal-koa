import React from 'react'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import path from 'path'

import App from '../../client/src/Iso'
import configureStore from '../../client/src/redux/store'

function layout (html, state, common, context = { title: 'index' }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='renderer' content='webkit'/>
      <meta name='keywords' content='demo'/>
      <meta name='description' content='demo'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <title>${context.title}</title>
      ${common.css ? `<link href="${common.css}" rel="stylesheet">` : ''}
    </head>
    <body>
      <script>
        window.__REDUX_DATA__ = ${JSON.stringify(state)};
      </script>
      <div id="root"><div>${html}</div></div>
    
    <script type="text/javascript" src="/dist/dll/vendor.dll.js"></script>
    <script type="text/javascript" src=${common.js}></script>
    </body>
    </html>
  `
}

function SSR () {
  return async function ssr (ctx, next) {
    ctx.render = function r () {
      const html = renderToString
      const location = {
        pathname: ctx.path
      }
      const json = {}
      const IS_DEV = process.env.SSR === 'SSR'
      const fileName = IS_DEV ? '/config/assets.json' : '/config/assets.prod.json'
      const text = fs.readFileSync(path.join(process.cwd(), fileName), 'utf-8')
      Object.assign(json, JSON.parse(text))
      const store = configureStore()
      const state = store.getState()

      const markup = html(<App location={location} store={store} />)
      ctx.type = 'html'
      ctx.body = layout(markup, state, json.index)
    }
    await next()
  }
}

module.exports = SSR
