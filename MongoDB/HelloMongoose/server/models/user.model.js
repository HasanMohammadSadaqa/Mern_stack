const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String, //attribute : type
	age: Number
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

//we change here the attributes (like: name, age ,..etc)
//whatever we export here we require it in controller