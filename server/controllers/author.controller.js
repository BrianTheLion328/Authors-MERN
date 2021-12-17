const Author = require('../models/author.model');

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
    .then(authors => res.send(authors))
    .catch(error => console.log(error.response))
}
module.exports.addOneAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.json(newAuthor) )
    .catch(error => {
        console.log(error)
        res.status(400).json(error)
    }
)}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne( {_id: req.params.id} )
    .then(author => res.send(author) )
    .catch(error => console.log(error.response) )
}
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, // this means we want the new updated product in the .then()
        runValidators: true,
    })
        .then((updatedAuthor) => res.send(updatedAuthor) )
        .catch(error => res.status(400).json(error.response))
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne( {_id: req.params.id} )
    .then(result => res.send(result) )
    .catch(error => res.status(400).json(error.response) )
}
