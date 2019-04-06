const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.testproject3db
        .find(req.query)
        .then(dbModel)
        .catch(err=> res.status(422).json(err));
    },

    findById: function(req,res){
        db.testproject3db
    }








}