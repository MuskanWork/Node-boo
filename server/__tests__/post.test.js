const PostService = require('../services/post.service');
const PostController = require('../controllers/post.controller');

// Mock the PostService methods
jest.mock('../services/post.service', () => ({
  getPost: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
}));

describe('PostController', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {},
      query: {},
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

  describe('getPost', () => {
    it('should call PostService.getPost and return data on success', async () => {
      const mockData = { title: 'Sample Post', content: 'Lorem ipsum dolor sit amet' };
      PostService.getPost.mockResolvedValue(mockData);

      await PostController.getPost(req, res);

      expect(PostService.getPost).toHaveBeenCalledWith(req.params, req.query);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to get post');
      PostService.getPost.mockRejectedValue(mockError);

      await PostController.getPost(req, res);

      expect(PostService.getPost).toHaveBeenCalledWith(req.params, req.query);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createPost', () => {
    it('should call PostService.createPost and return data on success', async () => {
      const mockData = { id: 123, title: 'Sample Post' };
      req.body = { title: 'Sample Post', content: 'Lorem ipsum dolor sit amet' };
      PostService.createPost.mockResolvedValue(mockData);

      await PostController.createPost(req, res);

      expect(PostService.createPost).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to create post');
      req.body = { title: 'Sample Post', content: 'Lorem ipsum dolor sit amet' };
      PostService.createPost.mockRejectedValue(mockError);

      await PostController.createPost(req, res);

      expect(PostService.createPost).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updatePost', () => {
    it('should call PostService.updatePost and return data on success', async () => {
      const mockData = { id: 123, title: 'Sample Post' };
      req.body = { id: 123, title: 'Sample Post', content: 'Updated content' };
      PostService.updatePost.mockResolvedValue(mockData);

      await PostController.updatePost(req, res);

      expect(PostService.updatePost).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return error response', async () => {
      const mockError = new Error('Failed to update post');
      req.body = { id: 123, title: 'Sample Post', content: 'Updated content' };
      PostService.updatePost.mockRejectedValue(mockError);

      await PostController.updatePost(req, res);

      expect(PostService.updatePost).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(mockError);
    });
  });
});
