// ---DEPENDENCIES---
const express = require('express');
var session = require("express-session");
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require("./routes");
const passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const validPassword = (userPassword, password) => {
  return userPassword === password;
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ---MODELS---
// (Require models here)

// ---ROUTES---
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });