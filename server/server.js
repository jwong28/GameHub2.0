const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Data = require("./Data"); 
const Data = require("./models/Data");
// console.log(Data);
// // Currently working code

// const API_PORT = 3001;
// const app = express();
// app.use(cors());
// const router = express.Router();

// // // this is our MongoDB database
// const dbRoute = "mongodb+srv://dbUser:CS370.123@cluster0-xt02i.mongodb.net/test?retryWrites=true";

// // connects our back end code with the database
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

// let db = mongoose.connection;

// db.once("open", () =>{ console.log("connected to the database")
// // console.log(Data.find())
// });

// // checks if connection with the database is successful
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// // (optional) only made for logging and
// // bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger("dev"));

// // this is our get method
// // this method fetches all available data in our database
// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// // this is our update method
// // this method overwrites existing data in our database
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findOneAndUpdate(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// // this is our delete method
// // this method removes existing data in our database
// router.delete("/deleteData", (req, res) => {
//   const { id } = req.body;
//   Data.findOneAndDelete(id, err => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// // this is our create methid
// // this method adds new data in our database
// router.post("/putData", (req, res) => {
//   let data = new Data();

//   const { id, message } = req.body;

//   if ((!id && id !== 0) || !message) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.message = message;
//   data.id = id;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// // append /api for our http requests
// app.use("/api", router);

// // launch our backend into a port
// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

//New backend code
const passport = require("passport");
const users = require("./routes/users");

const app = express();
app.use(cors());
//
const router = express.Router();
//
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const dbRoute = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    dbRoute,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"+ dbRoute))
  .catch(err => console.log(err));

//From original code
// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);
//

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
 
//Original port is 5000 for deployment on heroku
const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));