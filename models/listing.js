const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a listingSchema for our databse
const listingSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipe: {
        type: Array,
        required: true
    // },
    // user: {
    //     type: Schema.Types.ObjectId, ref: 'User'
    },
    image_url: {
        type: String,
        required: true
    }
});
const Listing = mongoose.model("Listing", listingSchema);


module.exports = Listing;