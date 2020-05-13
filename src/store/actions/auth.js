import * as actionTypes from './actionTypes'

//// Works as one
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
////