const express = require("express");
const router = express.Router();
const axios = require('axios')
const Drink = require('../../models/drink')

router.post("/", (req, res) => {
    console.log("helooooo")
    console.log("bark", req.body)
    let newDrink = new Drink({
        name: req.body.name,
        restaurant: req.body.restaurant,
        description: req.body.description,
        recipe: req.body.recipe
    })
    newDrink.save();
})

module.exports = router;