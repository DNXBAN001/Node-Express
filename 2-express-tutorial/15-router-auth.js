const express = require("express");
const router = express.Router();
const { people } = require("../data")


router.post("/", (req, res) => {
    const { name } = req.body
    const person = people.find(person => person.name === name)
    if(!person){
        return res
            .status(404)
            .json({success: false, msg: "No person with the name in the list of people"})
    }
    res.status(201).send(`<h1>Welcome back ${name}</h1>`)
})

module.exports = router