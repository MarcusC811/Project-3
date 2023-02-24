const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  first_name: {
    type: String,
  
    default: null,
  },
  last_name: {
    type: String,

    default: null,
  },
  bio: {
    type: String,
    default: null,
  },
  profilePic: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
},
);

const Profile = model('Profile', profileSchema);

module.exports = Profile;
