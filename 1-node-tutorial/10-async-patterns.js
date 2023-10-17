
const {readFile, writeFile} = require("fs");
//Alternatively
//const {readFile, writeFile} = require("fs").promises //which will return readFile and writeFile as promises
//Line 4 can replace 6, 8, and 9. meaning you can use readFile and writeFile directly on the start function
const util = require("util") //module to help us access the promisify, another flavour for creating the getText method

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try{
        const first = await readFilePromise("./utils/first.txt", "utf8");
        const second = await readFilePromise("./utils/second.txt", "utf8")
        await writeFilePromise("./utils/result.txt", "This is the content of the result file")
        console.log(first)
        console.log(second);
        const result = await readFilePromise("./utils/result.txt", "utf8")
        console.log(result)
    }catch(err){
        console.log(err)
    }
} 

start();


/**This is the promise version alone, without async await */
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             // console.log(data);
//             }
            
//         })
//     })
// }

//chaining the getText promise
// getText("../utils/first.txt")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
/**End of promise version alone */

//Handling the getText promise using async-await 
// const start = async () => {
//     try{
//         const first = await getText("./utils/first.txt");
//         const second = await getText("./utils/second.txt")
//         // await 
//         console.log(first)
//         console.log(second);
//     }catch(err){
//         console.log(err)
//     }
// } 