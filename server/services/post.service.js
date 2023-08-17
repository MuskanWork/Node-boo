const { Post } = require('../models');

class PostService {

  async getPost({ id }, { filter }) {
    const query = {};
    let sort = "";
    if (filter === "best") {
      sort = { likesCount: -1 }
    }
    if (id) query._id = id;
    const post = await Post.getByQuery(query, { findOne: !!id, populateFields: 'comments profileId votes', sort });
    return filter === "recent" ? post.reverse() : post;
  }

  async createPost(post) {
    post = await Post.create(post);
    return post;
  }

  async updatePost(post) {
    let id = post.id;
    delete post.id;
    await Post.updateByQuery({ id }, { $set: post });
    post = await this.getPost({ id });
    return post;
  }
}

module.exports = new PostService();
