// ---DEPENDENCIES---
const express = require('express');
var session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require('./models');
const routes = require("./routes");
const passport = require("./config/passport");
const path = require("path");
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();
var user = require('./routes/user');
var app = express();

const validPassword = (userPassword, password) => {
  return userPassword === password;
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
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });