const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  rating: Number, // 1 to 5
  comment: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
