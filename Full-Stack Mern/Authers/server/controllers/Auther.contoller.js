const Auther = require("../models/Auther.model");


//methods 
//first method to create new Auther
module.exports.createNewAuther = (req, res) => {
    const { name} = req.body
    Auther.create({
        name,
    })
        .then(newAuther => res.json(newAuther))
        .catch(err => res.json({message: "somthing went wrong", errors: err}));
}

//method to git all Authers
module.exports.findAllAuthers = (req, res) => {
    Auther.find({})
        .then(allAuthers => res.json(allAuthers))
        .catch(err => res.json({message:"Somthing went wrong", errors:err}))
}

//method to find specific Auther
module.exports.findSpecificAuther = (req, res) => {
    Auther.findOne({_id: req.params.id})
        .then(specificAuther => res.json(specificAuther))
        .catch(err => res.json(err))
}

//method to update 
module.exports.updateAuther =(req, res) =>{
    Auther.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedAuther => res.json(updatedAuther))
    .catch(err => res.status(400).json({message:"somthing went wrong", errors:err}));
}


//method to delete product
module.exports.deleteSpecificAuther =(req, res) =>{
    Auther.deleteOne({_id: req.params.id})
        .then(deletedAuther => res.json(deletedAuther))
        .catch(err => res.json({message:"somthing went wrong", errors:err}));
};

