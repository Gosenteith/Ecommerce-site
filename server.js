const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Models
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const Review = require('./models/Review');

console.log("🧪 Order Type:", typeof Order); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Optional API route (if you have an API file)
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Homepage: Display products, orders, and reviews
app.get('/', async (req, res) => {
  const products = await Product.find();
  const orders = await Order.find();
  const reviews = await Review.find();
  res.render('index', { products, orders, reviews });
});

//Add Product
app.post('/add-product', async (req, res) => {
  const { name, price, stock, category, tags } = req.body;
  const tagArray = tags ? tags.split(',').map(tag => tag.trim()) : [];
  const product = new Product({ name, price, stock, category, tags: tagArray });
  await product.save();
  res.redirect('/');
});

//Edit Product
app.post('/edit-product', async (req, res) => {
  const { id, name, price, stock } = req.body;
  await Product.findByIdAndUpdate(id, { name, price, stock });
  res.redirect('/');
});

//Delete Product
app.post('/delete-product', async (req, res) => {
  const { id } = req.body;
  await Product.findByIdAndDelete(id);
  res.redirect('/');
});

//Register User
app.post('/add-user', async (req, res) => {
  const { username, email, password, line1, city, zip } = req.body;
  const user = new User({
    username,
    email,
    password,
    address: { line1, city, zip }
  });
  await user.save();
  res.redirect('/');
});

//Place Order
app.post('/add-order', async (req, res) => {
  const { userId, productId, productName, price, quantity } = req.body;
  const order = new Order({
    userId,
    items: [{ productId, name: productName, price, quantity }]
  });
  await order.save();
  res.redirect('/');
});

//Submit Review
app.post('/add-review', async (req, res) => {
  const { productId, userId, rating, comment } = req.body;
  const review = new Review({ productId, userId, rating, comment });
  await review.save();
  res.redirect('/');
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
