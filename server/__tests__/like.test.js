const LikeService = require('../services/like.service');
const CommentController = require('../controllers/like.controller');

// Mock the LikeService methods
jest.mock('../services/like.service', () => ({
  getLike: jest.fn(),
  createLike: jest.fn(),
  updateLike: jest.fn(),
}));

describe('CommentController', () => {
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

  describe('getLike', () => {
    it('should call LikeService.getLike and return data on success', async () => {
      const mockData = { likes: 10 };
      LikeService.getLike.mockResolvedValue(mockData);

      await CommentController.getLike(req, res);

      expect(LikeService.getLike).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to get like');
      LikeService.getLike.mockRejectedValue(mockError);

      await CommentController.getLike(req, res);

      expect(LikeService.getLike).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createLike', () => {
    it('should call LikeService.createLike and return data on success', async () => {
      const mockData = { id: 123, userId: 'abc123' };
      req.body = { userId: 'abc123', commentId: 'xyz456' };
      LikeService.createLike.mockResolvedValue(mockData);

      await CommentController.createLike(req, res);

      expect(LikeService.createLike).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to create like');
      req.body = { userId: 'abc123', commentId: 'xyz456' };
      LikeService.createLike.mockRejectedValue(mockError);

      await CommentController.createLike(req, res);

      expect(LikeService.createLike).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updateLike', () => {
    it('should call LikeService.updateLike and return data on success', async () => {
      const mockData = { id: 123, userId: 'abc123', commentId: 'xyz456' };
      req.body = { id: 123, userId: 'abc123', commentId: 'xyz456', value: 1 };
      LikeService.updateLike.mockResolvedValue(mockData);

      await CommentController.updateLike(req, res);

      expect(LikeService.updateLike).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to update like');
      req.body = { id: 123, userId: 'abc123', commentId: 'xyz456', value: 1 };
      LikeService.updateLike.mockRejectedValue(mockError);

      await CommentController.updateLike(req, res);

      expect(LikeService.updateLike).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });
});
