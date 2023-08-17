const LikeRouter = require('express').Router();
const LikeController = require('../controllers/like.controller');

LikeRouter.get('/', LikeController.getLike);
LikeRouter.post('/', LikeController.createLike);
LikeRouter.patch('/', LikeController.updateLike);

module.exports = LikeRouter;
