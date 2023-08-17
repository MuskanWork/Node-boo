const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Types.ObjectId,
    ref: "Profile"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [{
    type: mongoose.Types.ObjectId,
    ref: "Comment"
  }],
  votes: [{
    type: mongoose.Types.ObjectId,
    ref: "Vote"
  }],
  likesCount: {
    type: Number,
    default: 0
  },
  likes: {
    type: []
  },


});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;