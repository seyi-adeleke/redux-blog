import UserApi from '../api/UserApi';
import { GET_ADMIN, SIGN_IN_ERROR, SIGN_OUT } from './actionTypes';


function SignInSuccess(payload) {
  return {
    type: GET_ADMIN, payload
  };
}


function SignInFailure(unauthorized) {
  return {
    type: SIGN_IN_ERROR, unauthorized
  };
}

function SignOut() {
  return {
    type: SIGN_OUT,
  };
}

/**
 *
 * @returns {function(*)}
 */
export function signIn(email, password) {
  return (dispatch) => {
    return UserApi.signIn(email, password).then((response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      dispatch(SignInSuccess(response.data));
    }).catch(() => {
      dispatch(SignInFailure(true));
    });
  };
}

export function signOut() {
  return (dispatch) => {
    localStorage.removeItem('token');
    console.log('hi');
    dispatch(SignOut());
  };
}
