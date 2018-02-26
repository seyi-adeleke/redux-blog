import axios from 'axios';
import { GET_POSTS } from './actionTypes';


// export const getPostsAction = () => {
//   return (dispatch) => {
//     return axios.get('api/v1/posts')
//       .then((response) => {
//         const payload = response.data;
//         dispatch({ type: GET_POSTS, payload });
//       })
//       .catch((error) => {
//         throw new Error({ error });
//       });
//   };
// };
//

const getPostsAction = () => (dispatch) => {
  axios.get('api/v1/posts')
    .then((response) => {
      const payload = response.data;
      dispatch({ type: GET_POSTS, payload });
    })
    .catch((error) => {
      throw new Error({ error });
    });
};
export default getPostsAction;
