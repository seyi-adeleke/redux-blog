import axios from 'axios';
import { GET_ADMIN, SIGN_IN_ERROR } from './actionTypes';


const signInAction = (email, password) => (dispatch) => {
  axios.post('/api/v1/users/login', { email, password })
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      const payload = response.data;
      dispatch({ type: GET_ADMIN, payload });
    })
    .catch(() => {
      const unauthorized = true;
      dispatch({ type: SIGN_IN_ERROR, unauthorized });
    });
};
export default signInAction;
