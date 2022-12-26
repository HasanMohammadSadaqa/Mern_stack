const mongoose = require ("mongoose");

const AuthersSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, " the name is required"]
    },
},
    {timestamps:true}
);

const Auther = mongoose.model("Auther", AuthersSchema);
module.exports= Auther;
