const UserController = require('../Controllers/UserController');
const PostController = require('../Controllers/PostController');
const utils = require('../Utilities/utilites');

module.exports = (app) => {
  app.post(
    '/api/v1/users',
    utils.isLoggedIn,
    UserController.signUp
  );

  app.post(
    '/api/v1/users/login',
    UserController.login
  );

  app.post(
    '/api/v1/posts',
    utils.isLoggedIn,
    PostController.createPost
  );

  app.get(
    '/api/v1/posts',
    PostController.getPosts
  );

  app.get(
    '/api/v1/post/:slug',
    utils.checkUser,
    PostController.getPost
  );

  app.delete(
    '/api/v1/post',
    utils.isLoggedIn,
    PostController.deletePost
  );

  app.put(
    '/api/v1/post/:slug/publish',
    utils.isLoggedIn,
    PostController.publishPost
  );

  app.put(
    '/api/v1/post/:slug/unpublish',
    utils.isLoggedIn,
    PostController.unPublishPost
  );
};
