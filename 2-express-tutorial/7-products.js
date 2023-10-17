const express = require("express");
const app = express();

//extract products data from the data file
const { products } = require("./data");

//get all products from the data file and print them on the browser as they are
app.get("/api/products", (req, res) => {
    res.send(products)
})

//Get all products but extract specific data about the product
app.get("/api/products-modified", (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.send(newProducts)
})

//Find specific product from the list of products
app.get("/api/products", (req, res) => {
    const singleProduct = products.find((product) => {
        return product.id === 1
    })
    res.send(products)
})

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000...")
})

