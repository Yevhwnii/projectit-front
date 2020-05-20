import * as actionTypes from './actionTypes'

// Auth process
export const auth = (userId, password) => {
    return {
        type: actionTypes.AUTH_USER_BEGIN,
        userId: userId,
        password: password
    }
}
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
    console.log('I am in auth fail');
    
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
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

// Auth UI
export const authRemoveError = () => {
    return {
        type: actionTypes.AUTH_REMOVE_ERROR
    }
}