import jwt from "jsonwebtoken"


const jwtauth=(req,res,next)=>{

// read the token 

const token =req.headers["authorization"]
// The middleware tries to read the token from the request headers. The token is expected to be in the Authorization header (though the key is misspelled as "authorisation"). In a typical scenario, the token would be passed as:

if(!token){

    return req.status(401).send("unauthorised user")
}

// check if token is vallid


try{

    const payload=jwt.verify(token,"aasdFGHJ23DFG567fgh345678dfgdfE")

    req.userid= payload.userID;
    console.log(payload);

}


catch(err){
  return res.status(401).send("unauthorised")    
}

// call next fn

next()

}

export default jwtauth