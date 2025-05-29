const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

console.log("✅ api.js loaded"); // ← Add this

router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send({ error: 'Failed to save product', details: err });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
