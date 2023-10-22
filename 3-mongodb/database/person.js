//Require mongoose
const mongoose = require("mongoose");

//create a person schema
const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    }
})

//export the person schema to used in people.js routes
module.exports = mongoose.model("Person", personSchema);