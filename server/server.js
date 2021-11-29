const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const User = require("./models/User.js")
//intialise app with express
const app = express();
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//connect to db
connectDB();
//routes
app.use('/users',require('./routes/users'))
app.get("/", (req, res) => {
  res.send("home page");
});

//run server
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
