import React, { Component } from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Root from './views/root'

export default class Isomorph extends Component {
  render () {
    const { location, store } = this.props
    return (
      <Provider store={store}>
        <StaticRouter location={location} context={{}}>
          <Root />
        </StaticRouter>
      </Provider>
    )
  }
}
