

import usermodell from "./user.modell.js";

import jwt from "jsonwebtoken"



export default  class usercontroller{

singin(req,res){

    const{email,password}=req.body

    const result=usermodell.singin(email,password)

    if(!result){

        req.send("user not found")
    }

    else{

         // after checking the creddentiall serversending token to client 

        const token =jwt.sign({userid:result.id,email:result.email},"aasdFGHJ23DFG567fgh345678dfgdfE",{ expiresIn: '1h' })

        res.send(token)
    
    }

}


singup(req,res){
    
    const {name,email,password,type}=req.body
    
    const view =usermodell.singup(name,email,password,type)
    console.log(view)
    res.send(view)
    
    
    }


    
}