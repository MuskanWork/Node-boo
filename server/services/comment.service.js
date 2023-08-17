const { Comment, Post, Vote } = require('../models');

class CommentService {

  async getComment({ id }) {
    const query = {};
    if (id) query._id = id;
    const comment = await Comment.getByQuery(query, { findOne: !!id });
    return comment;
  }

  async createComment(comment) {
    const { mbti, enneagram, zodiac, profileId, postId, message } = comment;
    let updatedComments = await Comment.create({ profileId, postId, message });
    let vote = await Vote.create({
      profileId, postId, mbti, enneagram, zodiac
    })
    await Post.updateByQuery(
      { _id: postId },
      {
        $push: {
          comments: updatedComments._id,
          votes: vote._id
        }
      }, { new: true, useFindAndModify: false }
    )
    return updatedComments;
  }

  async updateComment(comment) {
    let id = comment.id;
    delete comment.id;
    await Comment.updateByQuery({ _id: id }, { $set: comment });
    comment = await this.getComment({ id });
    return comment;
  }
}

module.exports = new CommentService();
