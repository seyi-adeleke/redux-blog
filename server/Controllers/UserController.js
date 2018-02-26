const User = require('../Models/User');
const utils = require('../Utilities/utilites');


module.exports = {
  signUp: (req, res) => {
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
    User.findOne({
      email: req.body.email,
    }, (error, user) => {
      const isValidPassword = utils.comparePassword(req.body.password, user.password);
      if (error) {
        throw new Error({
          error,
        });
      }
      if (user && isValidPassword) {
        const token = utils.createJwt(user.name, user.email);
        return res.status(200).json({
          message: 'login successful',
          token,
        });
      }
    });
  }
};
