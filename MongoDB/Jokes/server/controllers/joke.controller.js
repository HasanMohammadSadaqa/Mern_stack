const Joke = require ("../models/joke.model");

//methods
//method to get all jpkes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes : allJokes}))
        .catch(errors => res.json({messgae :"somthing went wrong", errors:errors}));
};

//metod to get specific joke
module.exports.findSpecificJoke = (req, res) => {
    if(req.params.id != "random"){
        Joke.findOne({_id: req.params.id})
        .then (specificJoke => res.json({oneSingleJoke: specificJoke}))
        .catch(err => res.json({essage : "something went wrong", errors: err}));
    } else{
        Joke.count(function(err, count){
            var random = Math.floor(Math.random() * count)
            Joke.findOne().skip(random)
                .then(randomJoke => res.json({random: randomJoke}))
                .catch(err => res.json({message:"somthing went wrong", errors: err}))
        })
    }
};

//method to create new joke
module.exports.createNewJoke =(req, res)=>{
    Joke.create(req.body) 
        .then(newJoke => res.json({newJoke: newJoke}))
        .catch(err => res.json({message:"somthing went wrong", errors:err}));
};

//method to update a specific joke
module.exports.updateSpecificJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedJoke => res.json({updateJoke:updatedJoke}))
        .catch(err => rres.json({message:"womthing went wrong", errors:err}));
};

//method to delete joke
module.exports.deleteSpecificJoke =(req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke => res.json({deleteJoke: deletedJoke}))
        .catch(err => res.json({message:"somthing went wrong", errors:err}));
};


