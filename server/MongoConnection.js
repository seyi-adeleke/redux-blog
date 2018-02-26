const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (config) => {
  mongoose.connect(config.db, {
  }).then(
    () => {
      console.log('connection established');
    },
    error => {
      /** handle initial connection error */
    }
  );
};

