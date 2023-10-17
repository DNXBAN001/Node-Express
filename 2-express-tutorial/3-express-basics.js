const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>")
})
app.get("/about", (req, res) => {
  res.status(404).send("<h1>About Page</h1>")
})
//for all other urls - 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>404 Resource Cannot Be Found</h1>")
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})