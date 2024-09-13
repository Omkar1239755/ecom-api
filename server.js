import express from 'express';
import router from './src/product/product.route.js';
import userrouter from './src/user/user.routes.js';
import jwtauth from './src/middleware/jwt.middleware.js';



const server=express()


server.use(express.json()); // For parsing application/json

// routes
server.use("/api/products",jwtauth,router)
server.use("/api/user",userrouter)


server.get("/",(req,res)=>{

    res.send("welcome to ecom apis")
})



server.listen(3000)

console.log("server is listening")