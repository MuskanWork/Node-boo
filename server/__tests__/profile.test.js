const ProfileService = require('../services/profile.service');
const ProfileController = require('../controllers/profile.controller');

// Mock the ProfileService methods
jest.mock('../services/profile.service', () => ({
  getProfile: jest.fn(),
  createProfile: jest.fn(),
  updateProfile: jest.fn(),
}));

describe('ProfileController', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getProfile', () => {
    it('should call ProfileService.getProfile and return data on success', async () => {
      const mockData = { name: 'John Doe', age: 25 };
      ProfileService.getProfile.mockResolvedValue(mockData);

      await ProfileController.getProfile(req, res);

      expect(ProfileService.getProfile).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Profile not found');
      ProfileService.getProfile.mockRejectedValue(mockError);

      await ProfileController.getProfile(req, res);

      expect(ProfileService.getProfile).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createProfile', () => {
    it('should call ProfileService.createProfile and return data on success', async () => {
      const mockData = { id: 123, name: 'John Doe' };
      req.body = { name: 'John Doe' };
      ProfileService.createProfile.mockResolvedValue(mockData);

      await ProfileController.createProfile(req, res);

      expect(ProfileService.createProfile).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to create profile');
      req.body = { name: 'John Doe' };
      ProfileService.createProfile.mockRejectedValue(mockError);

      await ProfileController.createProfile(req, res);

      expect(ProfileService.createProfile).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updateProfile', () => {
    it('should call ProfileService.updateProfile and return data on success', async () => {
      const mockData = { id: 123, name: 'John Doe' };
      req.body = { name: 'John Doe' };
      ProfileService.updateProfile.mockResolvedValue(mockData);

      await ProfileController.updateProfile(req, res);

      expect(ProfileService.updateProfile).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to update profile');
      req.body = { name: 'John Doe' };
      ProfileService.updateProfile.mockRejectedValue(mockError);

      await ProfileController.updateProfile(req, res);

      expect(ProfileService.updateProfile).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });
});
