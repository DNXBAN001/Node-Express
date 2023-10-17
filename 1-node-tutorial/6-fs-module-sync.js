const {readFileSync, writeFileSync} = require("fs");

const fileContent = readFileSync("./utils/diary.txt", "utf8");
console.log(fileContent)

writeFileSync("./utils/result.txt", "/n/rHello world, and of course like i said, this is Barnez76 /n", {flag: "a"});