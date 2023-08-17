const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  mbti: {
    type: String
  },
  enneagram: {
    type: String
  },
  variant: {
    type: String
  },
  tritype: {
    type: String
  },
  socionics: {
    type: String
  },
  sloan: {
    type: String
  },
  psyche: {
    type: String
  },
  image: {
    type: String,
    default: 'https://soulverse.boo.world/images/1.png'
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;