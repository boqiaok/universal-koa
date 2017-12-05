import { createStore } from 'redux'
import { fromJS } from 'immutable'
import rootReducer from '../reducers'
import middlewares, { sagaMiddleware } from './middlewares'
import mySaga from '../saga'

export default function configureStore (initialState = {}) {
  const store = createStore(rootReducer, fromJS(initialState), middlewares)
  sagaMiddleware.run(mySaga)
  return store
}
