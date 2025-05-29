const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: String, // could also use mongoose.Schema.Types.ObjectId if linked
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  status: { type: String, default: 'processing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
