const express = require("express");
const app = express();

// const logger = require("./logger");
// const authorize = require("./authorize");
const loggerMorgan = require("morgan");

// app.use([logger, authorize])
app.use(loggerMorgan("tiny"));

app.get("/", (req, res) => {
  console.log(req.user)
  res.send("<h1>Home Page</h1>")
})
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>")
})
app.get("/api/products", (req, res) => {
  res.send("<h1>Products page</h1>")
})
app.get("/api/items", (req, res) => {
  res.send("<h1>Items page</h1>")
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})

