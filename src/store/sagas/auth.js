import {put} from 'redux-saga/effects'
import axios from 'axios'

import * as actions from '../actions'

export function* authSaga(action) {
    yield put(actions.authStart())
    const authData = {
        email: action.email,
        password: action.password
    }
    console.log(authData);
    
    // const url = ''
    // try {
    //     const response = yield 
    // } catch (error) {
        
    // }
}