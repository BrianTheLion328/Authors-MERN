const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a successful connection to the database!"))
    .catch((error) => console.log("Something went wrong with the connection", error))
