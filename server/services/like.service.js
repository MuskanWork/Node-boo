const { Post } = require('../models');

class LikeService {

  async getLike({ id }) {
    const query = {};
    if (id) query.id = id;
    const likes = await Post.getByQuery(query, { findOne: !!id, fields: "likes" });
    return likes;
  }

  async createLike(post) {
    post = await Post.updateByQuery(
      { $and: [{ _id: post.postId }, { likes: { $nin: post.profileId } }] },
      {
        $push: {
          likes: post.profileId
        },
        $inc: { likesCount: 1 }
      }, { new: true, useFindAndModify: false }
    )
    return "liked...";
  }

  async updateLike(post) {
    post = await Post.updateByQuery(
      { $and: [{ _id: post.postId }, { likes: { $in: post.profileId } }] },
      {
        $pull: {
          likes: post.profileId
        },
        $inc: { likesCount: 1 }
      }, { new: true, useFindAndModify: false }
    )
    return "unliked...";
  }
}

module.exports = new LikeService();
