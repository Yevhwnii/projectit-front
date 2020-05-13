import {takeEvery, all} from 'redux-saga/effects'

import {authSaga, authCheckState, authLogout} from './auth'
import * as actionTypes from '../actions/actionTypes'

export function* watchAuth() {
    yield all([
         takeEvery(actionTypes.AUTH_USER_BEGIN, authSaga),
         takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
         takeEvery(actionTypes.AUTH_LOGOUT_START, authLogout )
    ])
}