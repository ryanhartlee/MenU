const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true
  },

  password: { 
    type: String, 
    trim: true, 
    required: true 
  },

  date: { 
    type: Date, 
    default: Date.now 
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
