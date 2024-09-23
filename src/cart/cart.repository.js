
import { ObjectId } from "mongodb"
import { getdb } from "../config/mongodb.js"



export default  class cartrepository{

// 1
async addtocart(productid,userid,quantity){

try{

const db=getdb()
const collection=db.collection("cart")
await collection.insertOne({productid,userid,quantity})
}
catch(err){

    console.log(err)
}

}


// 2

async get(userid){

    const db=getdb()
    const collection=db.collection("cart")
   await  collection.find({userid:new ObjectId(userid)}).toArray()


}








}