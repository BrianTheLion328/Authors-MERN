const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must enter a valid first and last name."],
        minlength: [3, "Author's first and last name must total 3 characters or longer."],
    },

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;
