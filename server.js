import express from 'express';
import router from './src/product/product.route.js';
import userrouter from './src/user/user.routes.js';
import jwtauth from './src/middleware/jwt.middleware.js';
import {connectmongodb} from "./src/config/mongodb.js";
import cartroute from './src/cart/cart.routes.js';
import cors from 'cors'


const server=express()


server.use(express.json()); // For parsing application/json

// routes
server.use("/api/products",router)
server.use("/api/user",userrouter)
server.use("/api/cart",jwtauth,cartroute);



// cors policy library se krlia
server.use(cors('*'))

// server.use(req,res,next)=>{

//     // isme star ka mtlb sariii method access kr skta hai 
// res.header('acces-controll-allow-origin','*')

// res.header('acces-controll-allow-header','*')


// res.header('acces-controll-allow-method','*')

// // return ok for preflight request

// if(req.method=="OPTIONS"){
//     return res.sendStatus(200)
// }

// }


server.get("/",(req,res)=>{

    res.send("welcome to ecom apis")
})



server.listen(3000,connectmongodb())

console.log("server is listening")