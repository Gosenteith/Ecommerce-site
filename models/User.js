const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Store as plain text for now — we’ll hash it later if needed
  role: { type: String, default: 'customer' },
  address: {
    line1: String,
    city: String,
    zip: String
  }
});

module.exports = mongoose.model('User', UserSchema);
