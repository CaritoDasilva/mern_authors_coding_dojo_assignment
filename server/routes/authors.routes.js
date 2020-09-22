const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors/", AuthorController.findAllProducts);
    app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateExistingAuthor);
    app.post("/api/authors/new", AuthorController.createNewAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAnExistingAuthor);
};