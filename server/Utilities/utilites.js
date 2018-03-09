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
    jwt.sign({ name, email }, process.env.JWT_SECRET, { expiresIn: '24h' }),

  isLoggedIn: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(500).send({ message: 'You do not have access to this routgrbe' });
    }
    const token = (req.headers.authorization);
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res
          .send({ message: 'There was an error processing your request' });
      }
      req.decoded = decoded;
      next();
    });
  },

};
