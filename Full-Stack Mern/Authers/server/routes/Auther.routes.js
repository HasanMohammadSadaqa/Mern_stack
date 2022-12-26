const AutherController = require("../controllers/Auther.contoller");

module.exports = app =>{
    app.post('/api/Auther/new', AutherController.createNewAuther);
    app.get('/api/Authers', AutherController.findAllAuthers);
    app.get("/api/Auther/:id", AutherController.findSpecificAuther);
    app.put("/api/Auther/:id", AutherController.updateAuther);
    app.delete("/api/Auther/:id", AutherController.deleteSpecificAuther)
}