// import express, body-parser and cors modules:
const express = require("express");  // Express is for building the Rest apis
const bodyParser = require("body-parser"); // body-parser helps to parse the request and create the req.body object
const cors = require("cors"); // cors provides Express middleware to enable CORS with various options.

// create an Express app, then add body-parser and cors middlewares using app.use() method.
const app = express();

// set origin: http://localhost:3000.
var corsOptions = {
      origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/jason
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// call sync() method:
const db = require("./app/models");
// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });

// define a GET route which is simple for test.
app.get("/", (req, res) => {
      res.json({ message: "Welcome to LibGuides application."});
});

// listen on port 3000 for incoming requests.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });