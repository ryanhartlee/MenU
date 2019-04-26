// ---DEPENDENCIES---
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// const db = require('./models');
const app = express();

const PORT = process.env.PORT || 3001;
const passport = require("passport");
const users = require("./routes/api/users");
const drinks = require("./routes/api/drinks")
const path = require("path");
const axios = require('axios');

const validPassword = (userPassword, password) => {
  return userPassword === password;
}


app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/drinks", drinks);

mongoose.Promise = Promise;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/menudb";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// ---MODELS---
// (Require models here)

// ---ROUTES---
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/src/index.js"));
  });

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
