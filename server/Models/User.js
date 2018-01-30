const Mongoose = require('mongoose');

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  } ,
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});


module.exports = Mongoose.model('User', userSchema);
