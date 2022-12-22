const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = app =>{
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findSpecificJoke);
    app.get("/api/jokes/random",JokeController.findSpecificJoke); // i can delete it 
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateSpecificJoke);
    app.delete("api/jokes/delete/:id", JokeController.deleteSpecificJoke);
}