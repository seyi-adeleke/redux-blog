import axios from 'axios';
import { DELETE_POST } from './actionTypes';

/**
 *
 */
function setRequestToken() {
  axios.defaults.headers.common.Authorization = localStorage.token;
  axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
}

const deletePostAction = slug => (dispatch) => {
  setRequestToken();
  axios.delete('/api/v1/post/', { data: { slug } })
    .then((response) => {
      console.log(response);
      const payload = response.data;
      dispatch({ type: DELETE_POST, payload });
    })
    .catch((error) => {
      throw new Error({ error });
    });
};
export default deletePostAction;
