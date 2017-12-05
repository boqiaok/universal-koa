import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
// import * as Api from './api';
import * as ActionsUser from '../reducers/user'

export function fetchUser () {
  return axios.get('/api/user')
}

function * fetchUserSaga (action) {
  try {
    const user = yield call(fetchUser)
    yield put(ActionsUser.loginin(user))
  } catch (e) {
    //  yield put(Actions.getUserFail(e));
  }
}

function * mySaga () {
  yield takeEvery(ActionsUser.LOGIN, fetchUserSaga)
}

export default mySaga
