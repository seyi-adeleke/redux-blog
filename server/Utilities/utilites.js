const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
  hashPassword: (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },
  comparePassword: (password, hashPassword) =>
    bcrypt.compareSync(password, hashPassword),

  createJwt: (name, email) =>
    jwt.sign({name, email}, 'secret', { expiresIn: '24h' }),

  isLoggedIn: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.send({ message: 'You do not have access to this route' });
    }
    const token = (req.headers.authorization);
    jwt.verify(token, 'secret', (error, decoded) => {
      if (error) {
        return res
          .send({ message: 'There was an error processing your request' });
      }
      req.decoded = decoded;
      next();
    });
  },

};
