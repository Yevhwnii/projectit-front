import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}

const authStart = (state, action) => {
    console.log(state);
    
    return {
        ...state,
        loading: true,
        error: null // if there is was error, remove it
    }
}

const authSuccess = (state,action) => {
    return {
        ...state,
        token: action.token,
        loading: false,
        error: null
    }
}

const authLogout = (state,action) => {
    return {
        ...state,
        token: null,
        error: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action)
        case actionTypes.AUTH_LOGOUT_SUCCED: return authLogout(state,action)
        default:
            return state
    }
}

export default reducer