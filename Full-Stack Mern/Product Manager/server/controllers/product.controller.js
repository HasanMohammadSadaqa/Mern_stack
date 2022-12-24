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
        .catch(err => res.status(400).json({message: "somthing went wrong", errors: err}));
}

//method to git all products
module.exports.findAllPoducts = (req, res) => {
    Product.find({})
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json({message:"Somthing went wrong", errors:err}))
}

//method to find specific product
module.exports.findSpecificProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(specificProduct => res.json(specificProduct))
        .catch(err => res.json(err))
}
//method to update 
module.exports.updateProduct =(req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators : true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(400).json({message:"somthing went wrong", errors:err}));
}


//method to delete product
module.exports.deleteSpecificProduct =(req, res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json(Product))
        .catch(err => res.json({message:"somthing went wrong", errors:err}));
};