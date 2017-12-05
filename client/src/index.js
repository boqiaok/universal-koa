import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './redux/store'
import { AppContainer } from 'react-hot-loader'
import Root from './views/root'

const initialState = window.__REDUX_DATA__
delete window.__PRELOADED_STATE__

const store = configureStore(initialState)

const renderIndex = Component => {
  render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderIndex(Root)

if (module.hot) {
  module.hot.accept('./views/root', () => {
    const NextApp = require('./views/root').default
    renderIndex(NextApp)
  })
}
