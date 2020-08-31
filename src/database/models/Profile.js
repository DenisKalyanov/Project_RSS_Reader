const mongoose = require("mongoose");

const Profiles = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  wasBorn: {
    type: Date,
    required: true
  },
  mobilePhone: {
    type: String
  },
  location: {
    type: String
  },
  preferNews: {
    type: [String],
    required: true
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    vk: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("profile", Profiles);
