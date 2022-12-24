const ProductController = require("../controllers/product.controller");
// const Joke = require("../models/joke.model");
// const Joke = require("../");

module.exports = app =>{
    app.post('/api/product/new', ProductController.createNewProduct);
    app.get('/api/products', ProductController.findAllPoducts);
    app.get("/api/product/:id", ProductController.findSpecificProduct);
    app.put("/api/product/:id", ProductController.updateProduct);
    app.delete("/api/product/:id", ProductController.deleteSpecificProduct)
}