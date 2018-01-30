const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (config) => {
  mongoose.connect(config.db).then(
    () => {
      console.info('connection established')
    },
    error => {
     throw new error({
       error,
     })
    }
  );
};

