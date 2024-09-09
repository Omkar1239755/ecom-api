import express from 'express';
import router from './src/product/product.route.js';
import bodyParser from 'body-parser';





const server=express()
server.use(bodyParser.json())

// routes

server.use("/api/products",router)

server.get("/",(req,res)=>{

    res.send("welcome to ecom apis")
})



server.listen(3000)

console.log("server is listening")