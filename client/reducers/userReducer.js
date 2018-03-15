import isEmpty from 'lodash/isEmpty';
import { GET_ADMIN, SIGN_IN_ERROR, SET_ADMIN, SIGN_OUT } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  unAuthorized: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ADMIN:
    return {
      ...state,
      user: action.payload.token,
      isAuthenticated: !isEmpty(action.payload),
    };
  case SIGN_IN_ERROR:
    return {
      ...state,
      unAuthorized: action.unauthorized,
    };
  case SET_ADMIN:
    return {
      ...state,
      user: localStorage.getItem('token'),
      isAuthenticated: true,
    };
  case SIGN_OUT:
    return {
      ...state,
      isAuthenticated: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
