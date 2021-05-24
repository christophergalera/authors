const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This is a required field."],
        minlength: [3, "Name must be longer than 3 characters."]
    }, 
}, 
{timestamps:true});

//create the model using the name of my collection and the Schema
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
