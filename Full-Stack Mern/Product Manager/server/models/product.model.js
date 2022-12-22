const mongoose = require ("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "title is required"],
        minlength: [10, "title must be at least 10charachters long"],
    },
    price: {
        type: Number,
        required : [true, "price is required"],
        min : [3, "price must be at least 3 charachters long"]
    }, 
    desc: {
        type: String,
        required : [true, "description is required"],
        minlength : [3, "description must be at least 3 charachters long"]
    } 
}, 
    { timestamps: true }
);

// const Joke = mongoose.model("Joke", JokeSchema);
// module.exports = Joke;                             //this is from previous assignemnt

const Product = mongoose.model("Product", ProductsSchema);
module.exports= Product;