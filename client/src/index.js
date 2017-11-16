import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { AppContainer } from 'react-hot-loader'
import Root from './views/root'

const renderIndex = Component => {
  render(
    <AppContainer>
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
  module.hot.accept(() => renderIndex(Root))
}
