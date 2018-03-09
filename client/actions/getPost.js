import axios from 'axios';
import { GET_POST } from './actionTypes';




const getPostAction = slug => (dispatch) => {
  axios.get(`/api/v1/post/${slug}`)
    .then((response) => {
      const payload = response.data;
      dispatch({ type: GET_POST, payload });
    })
    .catch((error) => {
      throw new Error({ error });
    });
};
export default getPostAction;
