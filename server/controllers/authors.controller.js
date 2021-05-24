const authors = require ('../models/authors.model');

module.exports = { 
    create: (req, res) => {
        console.log(req.body); //this will print the json object that we want to add to the DB
        Author.create(req.body)
            .then((newAuthor) => {
                console.log("In Create");
                res.json(newAuthor);
            })
            .catch((err) => {
                console.log("Error within create");
                res.status(500).json(err);
            })
    },
    getAll: (req, res) => {
        Author.find( { } )
        .then ((allAuthors) => {
            console.log("In getAll");
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log("Error within getAll");
            res.status(500).json(err);
        })
    },
    getOne: (req, res) => {
        console.log("getOne ID: " + req.params.id);
        Author.findById(req.params.id)
            .then((oneAuthor) => {
                console.log("In getOne");
                res.json(oneAuthor);
            }) 
            .catch((err) => {
                console.log("Error within getOne");
                res.status(500).json(err);
            })
    },
    update: (req, res) => {
        console.log(req.body); //this will print the json object that we want to add to the DB
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, //validators do not work by default, need to set to True
        })
            .then((updatedAuthor) => {
                console.log("In Update");
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log("Error within update");
                res.status(500).json(err);
            })
    },
    // delete superhero document
    delete: (req, res) => {
        console.log("delete ID: " + req.params.id);
        Author.findByIdAndDelete(req.params.id)
            .then((deletedAuthor) => {
                console.log("In delete");
                res.json(deletedAuthor);
            }) 
            .catch((err) => {
                console.log("Error within delete");
                res.status(500).json(err);
            });
    }


}