const http = require("http");

const data = require("./data")
const { readFileSync } = require("fs") 

//get all files
const homePage = readFileSync("./2-express-tutorial/navbar-app/index.html")
const homeStyles = readFileSync("./2-express-tutorial/navbar-app/styles.css")
const homeLogo = readFileSync("./2-express-tutorial/navbar-app/logo.svg")
const homeLogic = readFileSync("./2-express-tutorial/navbar-app/browser-app.js")
const aboutPage = readFileSync("./about.html")
const contactPage = readFileSync("./contact.html")

const server = http.createServer((req, res) =>{
  const url = req.url

  if(url === "/" || url === "/index.html"){
    res.writeHead(200, {"content-type": "text/html" })
    res.write(homePage)
    res.end()
  }
  else if(url === "/styles.css"){
    res.writeHead(200, {"content-type": "text/css" })
    res.write(homeStyles)
    res.end()
  }
  else if(url === "/logo.svg"){
    res.writeHead(200, {"content-type": "image/svg+xml" })
    res.write(homeLogo)
    res.end()
  }
  else if(url === "/browser=app.js"){
    res.writeHead(200, {"content-type": "text/javascript" })
    res.write(homeLogic)
    res.end()
  }
  else if(url === "/about.html" || url === "/about"){
    res.writeHead(200, {"content-type": "text/html" })
    res.write(aboutPage)
    res.end()
  }
  else if(url === "/contact.html" || url === "/contact"){
    res.writeHead(200, {"content-type": "text/html" })
    res.write(contactPage)
    res.end()
  }
  else{
    res.end("<h1>404 page not found</h1>")
  }
  
})

server.listen(5000, () => {
  console.log("Server listening on port 5000...");
})
