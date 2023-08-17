const CommentRouter = require('express').Router();
const CommentController = require('../controllers/comment.controller');

CommentRouter.get('/:id?', CommentController.getComment);
CommentRouter.post('/', CommentController.createComment);
CommentRouter.patch('/', CommentController.updateComment);

module.exports = CommentRouter;