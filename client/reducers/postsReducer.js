import { GET_POSTS, GET_POST, DELETE_POST } from '../actions/actionTypes';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
  case GET_POSTS:
    return {
      ...state,
      posts: action.payload.result,
    };
  case GET_POST:
    return {
      ...state,
      post: action.payload.post,
    };
  case DELETE_POST:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default postsReducer;
