const ProfileRouter = require('./profile.routes');
const PostRouter = require('./post.routes');
const CommentRouter = require('./comment.routes');
const LikeRouter = require('./like.routes');

const Router = require('express').Router();

Router.use('/profile', ProfileRouter);
Router.use('/post', PostRouter);
Router.use('/comment', CommentRouter);
Router.use('/like', LikeRouter);

module.exports = Router;
