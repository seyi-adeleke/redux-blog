import axios from 'axios';


export default {
  signIn: (email, password) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/users/login', {email, password })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};
