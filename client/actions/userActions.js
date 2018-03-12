import UserApi from '../api/UserApi';
import { GET_ADMIN, SIGN_IN_ERROR } from './actionTypes';


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
