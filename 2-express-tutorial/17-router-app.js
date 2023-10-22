const express = require("express");
const app= express();

//require the people.js file to be able to use for /api/people routes
const people = require("./routes/people");

//require auth.js file
const auth = require("./routes/auth");

//parse urlencoded data with the querystring library
app.use(express.urlencoded({extended: false}))

//let our app use json from the body that gets parsed into it
app.use(express.json())//allow server to accept json

//use the people.js as a middleware for /api/people routes
app.use("/api/people", people)

//use the auth.js as middleware
app.use("/login", auth)


app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})