const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body; //first name & last name here are the values from front end (لأنهم جايين من req.body)
    Person.create({   //but the first name and last name here are thoes in person.model.js
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

// module.exports.getAllPeople = (request, response) => {
//     Person.find({})
//         .then(persons => response.json(persons))
//         .catch(err => response.json(err))
// }

// module.exports.getPerson = (request, response) => {
//     Person.findOne({_id:request.params.id})
//         .then(person => response.json(person))
//         .catch(err => response.json(err))
// }

// module.exports.updatePerson = (request, response) => {
//     Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//         .then(updatedPerson => response.json(updatedPerson))
//         .catch(err => response.json(err))
// }


// module.exports.deletePerson = (request, response) => {
//     Person.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }










