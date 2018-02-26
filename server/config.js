const path = require('path');

const rootPath = path.normalize(`${__dirname}/../`);

module.exports = {
  development: {
    db: 'mongodb://localhost/seyi',
    rootPath,
    port: process.env.PORT || 8080,
  },
  production: {
    db: process.env.PROD_DB,
    rootPath,
    port: process.env.PORT,
  }
};
