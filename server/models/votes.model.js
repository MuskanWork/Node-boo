const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: true
  },
  mbti: {
    type: String
  },
  enneagram: {
    type: String
  },
  zodiac: {
    type: String
  }
});

const Vote = mongoose.model("Vote", VoteSchema);

module.exports = Vote;