const Post = require('../Models/Post');


module.exports = {
  createPost:(req, res) => {
    let tags = [];
    if(req.body.tags) {
     tags = req.body.tags.replace(/\s/g, '').split(",");
    }
    if(!req.body.title || !req.body.text)  {
      return res.status(400).json({
        message: 'Invalid request'
      })
    }

    const post = new Post({
      title: req.body.title,
      text: req.body.text,
      tags: tags || null,
    });
    post.save((error) => {
      if (error) {
        throw new Error({
          error,
        })
      }
      else {
        res.status(201).json({
          post,
        })
      }
    })
  },

  getPosts:(req, res) => {
    Post.find({}, "-_id -__v" ,(err, result) => {
      if (err) {
        throw new Error({
          err,
        })
      }
      else {
        res.status(200).json({
          result,
        })
      }
    })
  }
};
