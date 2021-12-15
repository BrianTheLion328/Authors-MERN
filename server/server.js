const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors() );

app.use(express.json() );

app.use(express.urlencoded( { extended: true } ) );

require("./config/mongoose.config");

const AuthorRoutes = require('./routes/author.routes');
AuthorRoutes(app)

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
});
