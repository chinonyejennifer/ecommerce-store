// routes/ecommerceRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller from the correct path
const ecommerceController = require('../controllers/ecommerceController');

// Define your product-related routes
router.get("/products", (req, res) => {
    ecommerceController.getProducts(req, res);
});

// Export the router object to be used in `index.js`
module.exports = router;