const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb://127.0.0.1/Alien"//assign database url

//require people middleware for routes
let people = require("./routes/people")

//allow server to accept json
app.use(express.json())

//establish connection with the database
mongoose.connect(url)
const conObj = mongoose.connection

//allow database to listen for open connection events
conObj.on("open", () => {
  console.log("Connection is established...")
}) 

//use people.js as middleware for /people routes
app.use("/people", people)

//allow server to listen for request
app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})