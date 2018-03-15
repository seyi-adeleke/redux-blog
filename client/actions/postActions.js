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
 * @param status
 * @returns {{type, status: *}}
 */
function publishPostSuccess(payload) {
  return {
    type: types.PUBLISH_POST, payload,
  };
}

/**
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
function unPublishPostSuccess(payload) {
  return {
    type: types.UNPUBLISH_POST, payload,
  };
}

/**
 *
 * @returns {function(*)}
 */
export function getPosts(status) {
  return (dispatch) => {
    return PostApi.getPosts(status).then((posts) => {
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

/**
 *
 * @param slug
 * @returns {function(*)}
 */
export function deletePost(slug) {
  return (dispatch) => {
    return PostApi.deletePost(slug).then((response) => {
      dispatch(deletePostSuccess(response.data));
    });
  };
}

/**
 *
 * @returns {function(*)}
 */
export function publishPost(id, slug) {
  const payload = {
    status: true,
    id,
  };
  return (dispatch) => {
    return PostApi.publishPost(slug).then(() => {
      dispatch(publishPostSuccess(payload));
    });
  };
}

/**
 *
 * @param id
 * @returns {function(*)}
 */
export function unPublishPost(id, slug) {
  const payload = {
    status: false,
    id,
  };
  return (dispatch) => {
    return PostApi.unPublishPost(slug).then(() => {
      dispatch(unPublishPostSuccess(payload));
    });
  };
}
