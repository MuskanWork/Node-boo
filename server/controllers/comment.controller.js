const CommentService = require('../services/comment.service');

class CommentController {

  async getComment(req, res) {
    try {
      const data = await CommentService.getComment(req.params);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createComment(req, res) {
    try {
      console.log(req.body);
      const data = await CommentService.createComment(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async updateComment(req, res) {
    try {
      const data = await CommentService.updateComment(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new CommentController();
