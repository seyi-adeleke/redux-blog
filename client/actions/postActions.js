import * as types from './actionTypes';
import PostApi from '../api/PostsApi';

/**
 *
 * @param posts
 * @returns {{type, posts: *}}
 */
function fetchPostsSuccess(posts) {
  return {
    type: types.GET_POSTS, posts
  };
}

/**
 *
 * @param payload
 * @returns {{type, payload: object}}
 */
function fetchPostSuccess(payload) {
  return {
    type: types.GET_POST, payload
  };
}

/**
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
function deletePostSuccess(payload) {
  return {
    type: types.DELETE_POST, payload,
  };
}

/**
 *
 * @returns {function(*)}
 */
export function getPosts() {
  return (dispatch) => {
    return PostApi.getPosts().then((posts) => {
      dispatch(fetchPostsSuccess(posts.data));
    });
  };
}

/**
 *
 * @param slug
 * @returns {function(*)}
 */
export function getPost(slug) {
  return (dispatch) => {
    return PostApi.getPost(slug).then((response) => {
      dispatch(fetchPostSuccess(response.data));
    });
  };
}


export function deletePost(slug) {
  return (dispatch) => {
    return PostApi.deletePost(slug).then((response) => {
      dispatch(deletePostSuccess(response.data));
    });
  };
}
