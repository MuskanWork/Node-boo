const CommentService = require('../services/comment.service');
const CommentController = require('../controllers/comment.controller');

// Mock the CommentService methods
jest.mock('../services/comment.service', () => ({
  getComment: jest.fn(),
  createComment: jest.fn(),
  updateComment: jest.fn(),
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

  describe('getComment', () => {
    it('should call CommentService.getComment and return data on success', async () => {
      const mockData = { id: 1, text: 'comment to test' };
      CommentService.getComment.mockResolvedValue(mockData);

      await CommentController.getComment(req, res);

      expect(CommentService.getComment).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to get comment');
      CommentService.getComment.mockRejectedValue(mockError);

      await CommentController.getComment(req, res);

      expect(CommentService.getComment).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createComment', () => {
    it('should call CommentService.createComment and return data on success', async () => {
      const mockData = { id: 1, text: 'comment to test' };
      req.body = { text: 'comment to test', userId: 1, postId: 1 };
      CommentService.createComment.mockResolvedValue(mockData);

      await CommentController.createComment(req, res);

      expect(CommentService.createComment).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to create comment');
      req.body = { text: 'comment to test', userId: 1, postId: 1 };
      CommentService.createComment.mockRejectedValue(mockError);

      await CommentController.createComment(req, res);

      expect(CommentService.createComment).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updateComment', () => {
    it('should call CommentService.updateComment and return data on success', async () => {
      const mockData = { id: 1, text: 'Updated comment' };
      req.body = { id: 1, text: 'Updated comment' };
      CommentService.updateComment.mockResolvedValue(mockData);

      await CommentController.updateComment(req, res);

      expect(CommentService.updateComment).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to update comment');
      req.body = { id: 1, text: 'Updated comment' };
      CommentService.updateComment.mockRejectedValue(mockError);

      await CommentController.updateComment(req, res);

      expect(CommentService.updateComment).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });
});
