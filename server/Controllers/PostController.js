const Post = require('../Models/Post');


module.exports = {
  createPost: (req, res) => {
    let tags = [];
    if (req.body.tags) {
      tags = req.body.tags.replace(/\s/g, '').split(',');
    }
    if (!req.body.title || !req.body.text) {
      return res.status(400).json({
        message: 'Invalid request'
      });
    }
    const post = new Post({
      title: req.body.title,
      text: req.body.text,
      excerpt: req.body.excerpt,
      tags: tags || null,
      slug: req.body.slug,
      published: false,
    });
    post.save((error) => {
      if (error) {
        throw new Error({
          error,
        });
      } else {
        return res.status(201).json({
          post,
        });
      }
    });
  },

  getPosts: (req, res) => {
    if (req.query.published === undefined || req.query.published === 'undefined') {
      Post.find({}, '-_id -__v', (err, result) => {
        if (err) {
          throw new Error({
            err,
          });
        } else {
          return res.status(200).json({
            result,
          });
        }
      });
    } else {
      Post.find({ published: req.query.published }, '-_id -__v', (err, result) => {
        if (err) {
          throw new Error({
            err,
          });
        } else {
          return res.status(200).json({
            result,
          });
        }
      });
    }
  },

  getPost: (req, res) => {
    if (req.isAdmin) {
      Post.findOne({ slug: req.params.slug }, '-_id -__v', (err, post) => {
        if (err) {
          throw new Error({
            err,
          });
        } else {
          return res.status(200).json({
            post,
          });
        }
      });
    } else {
      Post.findOne({ slug: req.params.slug }, '-_id -__v', (err, post) => {
        if (post === null) {
          return res.status(400).json({
            message: 'This resource doesn\'t exist',
          });
        }
        if (post && !post.published) {
          return res.status(403).json({
            message: 'You dont have access to this resource',
          });
        }
        return res.status(200).json({
          post,
        });
      });
    }
  },

  deletePost: (req, res) => {
    Post.findOneAndRemove({ slug: req.body.slug }, (err) => {
      if (!err) {
        res.status(201).json({
          message: 'Deleted',
        });
      } else {
        return res.status(400).json({
          message: '!Deleted',
        });
      }
    });
  },

  publishPost: (req, res) => {
    Post.findOneAndUpdate({ slug: req.params.slug }, { $set: { published: true } }, {
      runValidators: true,
      new: true,
    }, (err, post) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      return res.status(200).json({
        post,
      });
    });
  },

  unPublishPost: (req, res) => {
    Post.findOneAndUpdate({ slug: req.params.slug }, { $set: { published: false } }, {
      runValidators: true,
      new: true,
    }, (err, post) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      return res.status(200).json({
        post,
      });
    });
  },
};
