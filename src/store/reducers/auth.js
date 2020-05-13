import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPaht: '/'
}

const authStart = (state, action) => {
    console.log(state);
    
    return {
        ...state,
        loading: true,
        error: null // if there is was error, remove it
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state,action)
        default:
            return state
    }
}

export default reducer