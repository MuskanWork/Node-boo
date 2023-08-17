const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Types.ObjectId,
  },
  postId: {
    type: mongoose.Types.ObjectId,
  },
  message: {
    type: String,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;