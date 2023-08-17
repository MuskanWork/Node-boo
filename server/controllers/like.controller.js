const LikeService = require('../services/like.service');

class CommentController {

  async getLike(req, res) {
    try {
      const data = await LikeService.getLike(req.params);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createLike(req, res) {
    try {
      console.log(req.body);
      const data = await LikeService.createLike(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async updateLike(req, res) {
    try {
      const data = await LikeService.updateLike(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new CommentController();
