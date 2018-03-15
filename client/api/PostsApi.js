import axios from 'axios';
import store from '../store';

/**
 *
 */
function setRequestToken() {
  axios.defaults.headers.common.Authorization = localStorage.token;
}

export default {
  getPosts: (status) => {
    return new Promise((resolve, reject) => {
      axios.get(`api/v1/posts?published=${status}`)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getPost: (slug) => {
    if (store.getState().user.isAuthenticated) {
      setRequestToken();
    }
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/post/${slug}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deletePost: (slug) => {
    setRequestToken();
    axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
    return new Promise((resolve, reject) => {
      axios.delete('/api/v1/post/', { data: { slug } })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  publishPost: (slug) => {
    setRequestToken();
    return new Promise((resolve, reject) => {
      axios.put(`/api/v1/post/${slug}/publish`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  unPublishPost: (slug) => {
    setRequestToken();
    return new Promise((resolve, reject) => {
      axios.put(`/api/v1/post/${slug}/unpublish`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
};
