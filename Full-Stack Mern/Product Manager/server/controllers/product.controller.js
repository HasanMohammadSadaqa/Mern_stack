const Product = require("../models/product.model");

//methods 
//first method to create new product
module.exports.createNewProduct = (req, res) => {
    const { title, price, desc} = req.body
    Product.create({
        title,
        price,
        desc
    })
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "somthing went wrong", errors: err}));
}

//method to git all products
module.exports.findAllPoducts = (req, res) => {
    Product.find({})
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json({message:"Somthing went wrong", errors:err}))
}