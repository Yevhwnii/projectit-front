import {takeEvery} from 'redux-saga/effects'

import {authSaga} from './auth'
import * as actionTypes from '../actions/actionTypes'

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_USER_BEGIN, authSaga)
}