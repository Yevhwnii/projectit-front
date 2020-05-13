import {put, delay} from 'redux-saga/effects'
import axios from 'axios'

import * as actions from '../actions'


// Auth - process saga
export function* authSaga(action) {
    yield put(actions.authStart())
    const authData = {
        email: action.email,
        password: action.password
    }
    console.log(authData);
    
    yield localStorage.setItem('token', 'token received from database')
    yield delay(3000)
    yield put(actions.authSuccess('token received from database'))
    // Process of sending request to the backend, retrevieng it back, and store in localStorage
    // const url = ''
    // try {
    //     const response = yield 
    // } catch (error) {
        
    // }
}
// Auth - check auth process saga
export function* authCheckState(action) {
    const token = yield localStorage.getItem('token')
    // If !token - logout
    // TODO: expiration data check, if expired then logout, if not, new expiration date is assigned
    
    yield put(actions.authSuccess(token))
}
// Auth - logout process saga
export function* authLogout(action) {
    yield localStorage.removeItem('token')
    yield put(actions.authLogoutSucced())
}