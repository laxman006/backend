const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error while fetching products' });
  }
});

// @desc    Add a new product
// @route   POST /api/products
// @access  Public
router.post('/', async (req, res) => {
  console.log('📦 Incoming POST data:', req.body);

  try {
    const { name, price, image, link } = req.body;

    // Simple validation
    if (!name || !price) {
      console.warn('🚨 Missing name or price:', req.body);
      return res.status(400).json({ message: 'Product name and price are required' });
    }

    const newProduct = new Product({
      name,
      price,
      image,
      link,
    });

    const savedProduct = await newProduct.save();
    console.log('✅ Product saved:', savedProduct);

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('❌ Error saving product:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
