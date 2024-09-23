

import usermodell from "./user.modell.js";
import jwt from "jsonwebtoken"
import userrepository from "./user.repository.js"
import bcrypt from "bcrypt"


export default  class usercontroller{


constructor(){
    this.userrepository=new userrepository()
}


 async singin(req,res){

    const{email,password}=req.body

    const result=  await this.userrepository.singinusingemail (email)

    if(!result){

        req.send("user not found")
    }

    else{
        // compare the hashed passward
        const ans=await bcrypt.compare(password,result.password)
        if(!ans){
            res.send("error")
        }
        else{
            const token =jwt.sign({userid:result.id,email:result.email},"aasdFGHJ23DFG567fgh345678dfgdfE",{ expiresIn: '1h' })

            res.send(token)
        

        }

      
    
    }

}


 async singup(req,res){
    
    const {name,email,password,type}=req.body


    const hashpass=  await bcrypt.hash(password,12)
    // pass hash ki


    const user =new usermodell(
        name,
        email
        ,hashpass,type
    )
    
  await this.userrepository.singup(user)

console.log(user)
    res.send(user)
    
    
    }


    
}