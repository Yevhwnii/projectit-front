import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authCheckFinished: false,
  role: '',
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null, // if there is was error, remove it
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    userId: action.userId,
    role: action.role,
    loading: false,
    error: null,
    authCheckFinished: true,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
    error: action.error,
    loading: false,
    authCheckFinished: true,
  };
};

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    error: null,
    authCheckFinished: true,
  };
};

const authRemoveError = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT_SUCCED:
      return authLogout(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_REMOVE_ERROR:
      return authRemoveError(state, action);
    default:
      return state;
  }
};

export default reducer;
