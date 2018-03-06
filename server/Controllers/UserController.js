const User = require('../Models/User');
const utils = require('../Utilities/utilites');


module.exports = {
  signUp: (req, res) => {
    if (!req.body.password || !req.body.email || !req.body.name) {
      return res.status(400).json({
        message: 'No password or email or name',
      });
    }
    const password = utils.hashPassword(req.body.password);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password,
    });
    user.save((error) => {
      if (error) {
        throw new Error({
          error,
        });
      } else {
        res.status(201).json({
          user,
        });
      }
    });
  },

  login: (req, res) => {
    if (!req.body.password || !req.body.email) {
      return res.status(400).json({
        message: 'No password or email',
      });
    }
    User.findOne({
      email: req.body.email,
    }, (error, user) => {
      const isValidPassword = utils.comparePassword(req.body.password, user.password);
      if (user && isValidPassword) {
        const token = utils.createJwt(user.name, user.email);
        return res.status(200).json({
          message: 'login successful',
          token,
        });
      }
      return res.status(401).json({
        message: 'Access Denied',
        error,
      });
    });
  }
};
