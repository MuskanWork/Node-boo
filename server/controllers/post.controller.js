const PostService = require('../services/post.service');

class PostController {

  async getPost(req, res) {
    try {
      const data = await PostService.getPost(req.params,req.query);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createPost(req, res) {
    try {
      console.log(req.body);
      const data = await PostService.createPost(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async updatePost(req, res) {
    try {
      const data = await PostService.updatePost(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new PostController();
