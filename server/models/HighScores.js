const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create User Schema
const HighscoreSchema = new Schema({
  game: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
},{
  versionKey: false //removes version key from db
});
module.exports = User = mongoose.model("users", UserSchema);