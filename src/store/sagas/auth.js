import { put } from 'redux-saga/effects';
import axios from '../../axios';

import * as actions from '../actions';

// Auth - process saga
export function* authSaga(action) {
  yield put(actions.authStart());
  const authData = {
    userID: action.userId,
    password: action.password,
  };
  try {
    const response = yield axios.post('/api/auth', authData);
    const token = response.data.token;
    const role = response.data.role;
    yield localStorage.setItem('token', token);
    yield localStorage.setItem('userId', action.userId);
    yield localStorage.setItem('role', role);
    yield put(actions.authSuccess(token, action.userId, role));
  } catch (error) {
    yield put(actions.authFail(error.response.data.msg));
  }
}
// Auth - check auth process saga
export function* authCheckState(action) {
  const token = yield localStorage.getItem('token');
  const userId = yield localStorage.getItem('userId');
  const role = yield localStorage.getItem('role');

  if (token) {
    yield put(actions.authSuccess(token, userId, role));
  } else {
    yield put(actions.authLogout());
  }
  // TODO: expiration data check, if expired then logout, if not, new expiration date is assigned
  // what if i changed something in token? !!!
}
// Auth - logout process saga
export function* authLogout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('role');
  yield put(actions.authLogoutSucced());
}
