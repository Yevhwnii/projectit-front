import * as actionTypes from './actionTypes'

//// Auth process
export const auth = (email, password) => {
    return {
        type: actionTypes.AUTH_USER_BEGIN,
        email: email,
        password: password
    }
}
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}
////

/// Auth check state
export const checkAuthState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}