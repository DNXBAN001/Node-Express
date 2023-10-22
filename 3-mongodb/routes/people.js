//require express
const express = require("express");

//require router for routes
const router = express.Router();

//require personSchema 
let personSchema = require("../database/person")

//post single person to the database
router.post("/", async (req, res) => {
    try{
        const { firstName, lastName, qualification } = req.body
        if(!firstName || !lastName || !qualification){
            return res.status(400).json({success: false, msg: "Make sure to provide all person details"})
        }
        const person = new personSchema({firstName, lastName, qualification})
        const newPerson = await person.save()
        res.status(201).json({success: true, data: newPerson})

    }catch(err){
        res.status(400).json({success: false, msg: err})
    }
})
//get all the people in the database
router.get("/", async (req, res) => {
    try{
        const people = await personSchema.find()
        res.status(200).json({success: true, data: people})
    }catch(err){
        res.status(400).json({success: false, msg: err})
    }
})

//get person by id
router.get("/:id", async (req, res) => {
    try{
        //find the person by id
        const person = await personSchema.findById(req.params.id)
        res.status(200).json({success: true, data: person})
    }catch(err){
        res.status(404).json({success: false, msg: `Person with the id ${req.params.id} cannot be found... \r\n${err}`})
    }
})

//update single person details by id
router.put("/:id", async (req, res) => {
    try{
        //first find the person with the id if they exist
        const person = await personSchema.findById(req.params.id)
        //get the person new info from the req.body
        const {firstName, lastName, qualification} = req.body
        console.log("Before if condition...")
        if(!firstName || !lastName || !qualification){
            return res.status(400).json({success: false, msg: "Make sure to enter all person details..."})
        }
        person.firstName = firstName
        person.lastName = lastName
        person.qualification = qualification
        const updatedPerson = await person.save()
        res.status(201).json({success: true, data: updatedPerson})
    }catch(err){
        res.status(400).json({success: false, msg: `Person with the id ${req.params.id} cannot be found... \r\n${err}`})
    }
})

//delete single person details by id
router.delete("/:id", async (req, res) => {
    try{
        //find the person first
        await personSchema.findByIdAndRemove(req.params.id)
        res.send(`Person with the id ${req.params.id} removed`)
    }catch(err){
        res.status(400).json({success: false, msg: `Person with the id ${req.params.id} cannot be found... \r\n${err}`})
    }
})

//export the router object to be used by app.js
module.exports = router;