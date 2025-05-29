const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  category: String,
  tags: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
