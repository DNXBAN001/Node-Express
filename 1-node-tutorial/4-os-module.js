const os = require("os");

//user info
const user = os.userInfo();
console.log(user);

//system up time in seconds
console.log("The system uptime is: "+os.uptime()/3600+" seconds");

//Current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);