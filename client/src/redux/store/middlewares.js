import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()
let middleWare

if (process.env.NODE_ENV === 'production') {
  middleWare = applyMiddleware(thunk, sagaMiddleware)
} else {
  middleWare = applyMiddleware(thunk, sagaMiddleware, logger)
}
export default middleWare
