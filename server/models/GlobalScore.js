const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Global scoe Schema
const GlobalScoreSchema = new Schema({
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
module.exports = GlobalScore = mongoose.model("GlobalScore", GlobalScoreSchema);