import update from 'react-addons-update';

import {
  GET_POSTS, GET_POST, DELETE_POST,
  PUBLISH_POST, UNPUBLISH_POST
} from '../actions/actionTypes';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
  case GET_POSTS:
    return {
      ...state,
      posts: action.posts.result,
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
  case PUBLISH_POST:
    console.log(action);
    return update(state, {
      posts: {
        [action.payload.id]: {
          published: { $set: action.payload.status }
        }
      }
    });
  case UNPUBLISH_POST:
    return update(state, {
      posts: {
        [action.payload.id]: {
          published: { $set: action.payload.status }
        }
      }
    });
  default:
    return state;
  }
};

export default postsReducer;
