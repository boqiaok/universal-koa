import { createStore, compose } from 'redux'
import { fromJS } from 'immutable'
import rootReducer from '../reducers'
import mySaga from '../saga'
import middlewares, { sagaMiddleware } from './middlewares'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = composeEnhancers(middlewares)

export default function configureStore (initialState = {}) {
  const store = createStore(
    rootReducer,
    fromJS(initialState),
    enhancer
  )
  sagaMiddleware.run(mySaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
