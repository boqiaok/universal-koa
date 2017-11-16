import { combineReducers } from 'redux'
// import counter from './counter';
import userReducer from './user'
// load redux-form plugin

export default combineReducers({
  user: userReducer
})
