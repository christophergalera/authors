const AuthorsController = require ('../controllers/authors.controller');


module.exports = function(app) {
    app.post('/api/author', AuthorsController.create)
    app.get('/api/author', AuthorsController.getAll)
    app.get('/api/author/:id', AuthorsController.getOne)
    app.put('/api/author/:id', AuthorsController.update)
    app.delete('/api/author/:id', AuthorsController.delete)
};

//