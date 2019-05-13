const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create personal score Schema
const PersonalScoreSchema = new Schema({
  game: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
},{
  versionKey: false //removes version key from db
});
module.exports = PersonalScore = mongoose.model("PersonalScore", PersonalScoreSchema);