const ProfileService = require('../services/profile.service');

class ProfileController {

  async getProfile(req, res) {
    try {
      const data = await ProfileService.getProfile(req.params);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async createProfile(req, res) {
    try {
      console.log(req.body);
      const data = await ProfileService.createProfile(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async updateProfile(req, res) {
    try {
      const data = await ProfileService.updateProfile(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  }

}

module.exports = new ProfileController();
