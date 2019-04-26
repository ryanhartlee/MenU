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

router.get("/starbucks", (req, res) => {
//    console.log(req.body); 
   Drink.find({restaurant:"Starbucks"}).then(drinks => res.json(drinks))
})

router.get("/dutchbros", (req, res) => {
    //    console.log(req.body); 
       Drink.find({restaurant:"Dutch Bros"}).then(drinks => res.json(drinks))
    })

    router.get("/sonic", (req, res) => {
        //    console.log(req.body); 
           Drink.find({restaurant:"Sonic"}).then(drinks => res.json(drinks))
        })

module.exports = router;