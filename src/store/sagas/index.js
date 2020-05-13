import {takeEvery} from 'redux-saga/effects'

import {authSaga, authCheckState} from './auth'
import * as actionTypes from '../actions/actionTypes'

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_USER_BEGIN, authSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState)
}