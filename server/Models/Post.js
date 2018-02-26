const Mongoose = require('mongoose');

const postSchema = Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
  }
});


module.exports = Mongoose.model('Post', postSchema);
