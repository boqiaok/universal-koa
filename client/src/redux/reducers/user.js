import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const loginin = createAction(LOGIN)
export const loginout = createAction(LOGOUT)

const initialState = Map({
  logined: false
})

const userReducer = handleActions({
  [LOGIN]: (state, { payload }) => {
    return state
  },
  [LOGOUT]: (state, { payload }) => {
    return state
  }
}, initialState)

export default userReducer
