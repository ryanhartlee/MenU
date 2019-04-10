const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a drinkSchema for our database
const drinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipe: {
        type: Array,
        required: true
    }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;