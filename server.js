// ---DEPENDENCIES---
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require('./models');
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require('passport')
const passport = require('./config/passport')
const LocalStrategy = require('passport-local').Strategy;

const validPassword = (userPassword, password) => {
  return userPassword === password;
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(db.User.authenticate()));

// passport.serializeUser(db.User.serializeUser());
// passport.deserializeUser(db.User.deserializeUser());

// Serve up static assets
app.use(express.static("client/build"));

// MOVE THIS TO CONTROLLER LATER
app.post("/", function (req,res) {
  console.log(req.body);
  db.User
    .create(req.body);
});

app.post("/starbucks/drinks/", function (req,res) {
  console.log(req.body);
  db.Drink
    .create(req.body);
});

// app.use(routes);
// // Add routes, both API and view
// app.use(routes);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/menudb', {useNewUrlParser: true});


// ---MODELS---
// (Require models here)

// ---ROUTES---
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });