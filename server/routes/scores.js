const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// // Load input validation
// const validateRegisterInput = require("../validation/register");
// const validateLoginInput = require("../validation/login");
// // Load User model
// const User = require("../models/User");
//Load the two scores model (local and global)
const GlobalScore = require("../models/GlobalScore");
const PersonalScore = require("../models/PersonalScore")

// @route POST api/scores/add
// @desc Register user
// @access Public
router.post("/add", (req, res) => {
    var now = new Date();
    // console.log("Adding score");
    // console.log(req.body);
    //Put score in if doesn't exist
    // PersonalScore.findOne({ game : req.body.game , username : req.body.username }).then(score => {
    //     if (score) {
    //       return res.status(400).json({ score: "Email already exists" });
    //     } else {
    //         PersonalScore.insertOne(
    //             {           
    //                 game: req.body.game,
    //                 username: req.body.username,
    //                 score: req.body.score
    //             }, function(err, res) {
    //                 if (err) throw err;
    //             });
    //     //   const newScore = new User({
    //         }
    //       });
    
        //   // Hash password before saving in database
        //   bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(newUser.password, salt, (err, hash) => {
        //       if (err) throw err;
        //       newUser.password = hash;
            //   newScore
            //     .save()
            //     .then(user => res.json(user))
            //     .catch(err => console.log(err));
        //     });
        //   });
        // }
    //   });
    PersonalScore.findOneAndUpdate(
        { game : req.body.game , username : req.body.username},
        { 
            $set : { game: req.body.game, username: req.body.username},
            $setOnInsert: { score: req.body.score, date: now}
        },
        { upsert : true},
        err => {
            if (err) return res.json({ success: false, error: err });
            // return res.json();
            return res.json({ success: true });
    }
    );
    // If highscore update local
    PersonalScore.findOneAndUpdate(
        { game : req.body.game , username : req.body.username, score : { $lt : req.body.score }},
        { $set: { username: req.body.username, score: req.body.score, date: now}},
        err => {
            if (err) return res.json({ success: false, error: err });
            return res.json();
            // return res.json({ success: true });
    }
    );

    // If high score, update
    GlobalScore.findOneAndUpdate(
        { game: req.body.game , score : { $lte : req.body.score }},
        { $set: { username: req.body.username, score: req.body.score, date:now}},
        err => {
            if (err) return res.json({ success: false, error: err });
            return res.json();
            // return res.json({ success: true });
    }
    );



  });
  
  module.exports = router;