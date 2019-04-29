const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Data collection 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true 
  },
  {
    versionKey: false //removes version key from db
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = Data = mongoose.model("datas", DataSchema);
