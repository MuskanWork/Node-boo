const PostRouter = require('express').Router();
const PostController = require('../controllers/post.controller');

PostRouter.get('/:id?', PostController.getPost);
PostRouter.post('/', PostController.createPost);
PostRouter.patch('/', PostController.updatePost);

module.exports = PostRouter;
