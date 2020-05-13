import * as actionTypes from './actionTypes'

// Auth process
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

// Auth check state
export const checkAuthState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}
////

// Auth logout
export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_START
    }
}
export const authLogoutSucced = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_SUCCED
    }
}
////