const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = app =>{
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findSpecificJoke);
    app.get("/api/jokes/random",JokeController.findSpecificJoke); // i can delete it 
    app.get("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/update/:_id", JokeController.updateSpecificJoke);
    app.get("api/jokes/delete/:_id", JokeController.deleteSpecificJoke);
}