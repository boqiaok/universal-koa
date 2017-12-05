import { combineReducers } from 'redux-immutable'
import userReducer from './user'

export default combineReducers({
  user: userReducer
})
