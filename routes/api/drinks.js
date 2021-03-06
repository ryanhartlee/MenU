const express = require("express");
const router = express.Router();
const axios = require('axios')
const Drink = require('../../models/drink')

router.post("/", (req, res) => {
    console.log("bark", req.body)
    let newDrink = new Drink({
        name: req.body.name,
        restaurant: req.body.restaurant,
        description: req.body.description,
        recipe: req.body.recipe,
        user: req.body.user,
        image: req.body.image
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
    //    console.log(req); 
        Drink.find({restaurant:"Sonic"}).then(drinks => res.json(drinks))
    })

router.get("/user/:userName", (req, res) => {
    //    console.log(req.params.userName); 
        Drink.find({user: req.params.userName}).then(drinks => res.json(drinks))
    })    

router.delete("/:drink", (req, res) => {
    console.log("fired")
    Drink.remove({_id: req.params.drink})
    .then(drinkdelete => res.json(drinkdelete));
    })




module.exports = router;