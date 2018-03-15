const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const _checkToken = (req) => {
  return req.headers.authorization;
};

const _checkValidToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (decoded === 'undefined' || error) {
      return false;
    }
    return true;
  });
};

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
    if (!_checkToken(req)) {
      return res.status(500).send({ message: 'You do not have access to this route' });
    }
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res
          .send({ message: 'There was an error processing your request' });
      }
      req.decoded = decoded;
      next();
    });
  },

  checkUser: (req, res, next) => {
    if (!_checkToken(req) || !_checkValidToken(req.headers.authorization)) {
      req.isAdmin = false;
    } else {
      req.isAdmin = true;
    }
    next();
  },
};

