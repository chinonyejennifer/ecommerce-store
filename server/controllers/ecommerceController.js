const getProducts = async (req, res) => {
    try {
        // Fetch all products from the external API
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Get the category query parameter from the request URL
        const category = req.query.category;

        // Filter products if a category is provided
        const filteredProducts = category
            ? products.filter((product) => product.category === category)
            : products;

        // Respond with the filtered products
        res.status(200).json({ products: filteredProducts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
// Export all controller functions as an object
module.exports = {
    getProducts,
};