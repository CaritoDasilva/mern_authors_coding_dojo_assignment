const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must be have a name"],
        minlength: [4, "Name must have at least 4 characters"]
    }
})

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;