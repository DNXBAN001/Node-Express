const express = require("express");
const app = express();

//extract people data from the data file
const { people } = require("./data");

//pass static assets
app.use(express.static("./methods-public"))

//parse urlencoded data with the querystring library
app.use(express.urlencoded({extended: false}))

app.get("/api/people", (req, res) => {
  res.status(200).json({success: true, data: people})
})

app.post("/login", (req, res) => {
  console.log(req.body)
  const { name } = req.body
  if(name){
    return res.status(200).send(`<h1>Welcome back ${name}</h1>`)
  }
  
  res.status(401).send("<h1>Please provide credentials...</h1>")
})

//handle all other routes
app.all("*", (req, res) => {
  res.send("<h1>This route is not important in this case</h1>")
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})