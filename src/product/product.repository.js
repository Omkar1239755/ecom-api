
import { ObjectId } from "mongodb";
import { getdb } from "../config/mongodb.js"



class productrepository{

    // 1
    async add(newproduct){

        try{

    const db =getdb();
    const collection=db.collection("products")
    await collection.insertOne(newproduct)
    return newproduct


        }
        catch(err) {
           console.log(err)
        }

    }


    // 2 
    
    async get(id){
      try{
    const db =getdb();
    const collection=db.collection("products")
    const singleproduct =  await collection.findOne({ _id : new ObjectId(id) })
    return singleproduct}
    catch(err){

        console.log(err)
    }

    }


// 3




async rate(userid,productid,rating){

try{
    
    const db =getdb();
    const collection=db.collection("products")


   await collection.updateOne({
      _id: new ObjectId(productid)

    },{

        $push:{ratings:{userid,rating}}
    })

     
}
catch(err){

    res.send(err)
}

    }
// 4

    async getall(){
        try{
      const db =getdb();
      const collection=db.collection("products")
      const product =  await collection.find()
     return product
    
    }
      catch(err){
  
          console.log(err)
      }
  
      }
  



}


export default productrepository