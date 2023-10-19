const express = require("express");
const app = express();

//extract people data from the data file
const { people } = require("./data");

//pass static assets
app.use(express.static("./methods-public"))

//parse urlencoded data with the querystring library
app.use(express.urlencoded({extended: false}))

//let our app use json from the body that gets parsed into it
app.use(express.json())//allow server to accept json

//GET all people and return them as JSON
app.get("/api/people", (req, res) => {
  res.status(200).json({success: true, data: people})
})

//handle login POST method
app.post("/login", (req, res) => {
  console.log(req.body)
  const { name } = req.body
  if(name){
    return res.status(200).send(`<h1>Welcome back ${name}</h1>`)
  }
  
  res.status(401).send("<h1>Please provide credentials...</h1>")
})

//Return details of the person recently parsed
app.post("/api/person", (req, res) => {
  const { id, name } = req.body
  if(!name || !id){
    return res.status(400).json({success: false, msg: "Make sure to enter both id and name"})
  }
  const newPerson = {id: id, name: name}
  res.status(200).json({success: true, data: newPerson})
})

//Add person to the list of people and return the new list of people
app.post("/api/people", (req, res) => {
  const { id, name } = req.body
  if(!id || !name){
    return res.status(400).json({success: false, msg: "Make sure to enter both id and name"})
  }
  const newPeople = [...people, {id: req.body.id, name: req.body.name}]
  res.status(201).json({success: true, data: newPeople})
})

//Update person information using PUT method by parsing person ID
app.put("/api/people/:personID", (req, res) => {
  const { id, name } = req.body
  if(!id){
    return res.status(404).json({success: false, msg: "Person with the ID cannot be found"})
  }
  const newPeople = people.map(person => {
    if(person.id === id){
      person = {id: id, name: name}
    }
    return person
  })
  res.status(201).json({success: true, data: newPeople})
})

//handle all other routes
app.all("*", (req, res) => {
  res.send("<h1>This route is not important in this case</h1>")
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...")
})