import axios from 'axios';

function _setRequestToken() {
  axios.defaults.headers.common.Authorization = localStorage.token;
  axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
}
export default {
  getPosts: () => {
    return new Promise((resolve, reject) => {
      axios.get('api/v1/posts')
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getPost: (slug) => {
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
    _setRequestToken();
    return new Promise((resolve, reject) => {
      axios.delete('/api/v1/post/', { data: { slug } })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
};
