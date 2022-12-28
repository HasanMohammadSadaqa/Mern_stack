const mongoose = require ("mongoose");

const AuthersSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, " the name is required"],
        minlength: [3, "title must be at least 3 charachters long"],
    },
},
    {timestamps:true}
);

const Auther = mongoose.model("Auther", AuthersSchema);
module.exports= Auther;
