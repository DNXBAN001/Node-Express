
const { readFile, writeFile } = require("fs");

readFile("./utils/diary.txt", "utf8", (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})
writeFile("./utils/result-async.txt", "Hi there, this is async result written using the writeFile method", (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})