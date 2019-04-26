// ---DEPENDENCIES---
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// const db = require('./models');
const app = express();

const Port = process.env.PORT || 3001;
const passport = require("passport");
const users = require("./routes/api/users");
const drinks = require("./routes/api/drinks")
const path = require("path");
// const routes = require("./routes");

// Bodyparser middleware
// Parses data from POST requests - allowing us to use req.body
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes


app.use("/api/users", users);
app.use("/drinks", drinks);
// app.use(routes);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

mongoose.Promise = Promise;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/menudb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
