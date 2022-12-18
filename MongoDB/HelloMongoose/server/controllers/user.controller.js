const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => { //findAllUsers is my method name i can change it
  User.find() //but here is method from mongos i can't change it
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => { 
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // {-id: req.params.id} this means what i want to chnge (step 1 in update which is get), and req.body what is i hange in body take it as new value
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//here we write our logic (methods to make CRUD operations)
//diffrence between req.params.id and req.body.id
// req.params.id ===> the id come from URL
// req.body.id ==> the id come from Form
//req.body ===> {} رح برجعلي اوبجيكت دايما 

