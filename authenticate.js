const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = []

//let our app use json from the body that gets parsed into it
app.use(express.json())//allow server to accept json

app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.post("/users", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10) //10 is the number of rounds to generate the salt value, 
                                        //the greater the number the more time it takes to generate the value
        const hashedPassword = await bcrypt.hash(req.body.password, salt)//alternatively, we can just pass 10 in place of salt to replace line 11
        console.log(salt)
        console.log(hashedPassword)
        const user = { username: req.body.username, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    }catch(err){
        res.status(500).send(err)
    }
})

app.post("/users/login", async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if(user === null){
        return res.status(404).send("User cannot be found...")
    }
    try{
        //compare the incoming password with the password of the user that has the specified username
        if(await bcrypt.compare(req.body.password, user.password)){
            res.status(200).send("<h1>Login succesful...</h1>")
        }
        else{
            res.status(401).send("<h1>Not allowed...</h1>")
        }
    }catch(err){
        res.status(500).send("Error...")
    }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})