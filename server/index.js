const express = require("express");
const app = express();
const port = 4000;

// Middleware to handle JSON payloads
app.use(express.json());

// Import the routes from the correct path
const ecommerceRoutes = require('./routes/ecommerceRoutes');

// Set up the main route for your ecommerce features
app.use("/myStore", ecommerceRoutes);

// Start the app and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});