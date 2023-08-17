const ProfileRouter = require('express').Router();
const ProfileController = require('../controllers/profile.controller');

ProfileRouter.get('/:id?', ProfileController.getProfile);
ProfileRouter.post('/', ProfileController.createProfile);
ProfileRouter.patch('/', ProfileController.updateProfile);

module.exports = ProfileRouter;

