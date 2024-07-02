const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  preferredDestinations: {
    type: String, // Array of strings
    required: true
  },
  whereDidYouHearAboutUs: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
