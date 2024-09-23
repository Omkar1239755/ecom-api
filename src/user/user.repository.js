
import { getdb } from "../config/mongodb.js"


// it is not a static classs u have to create a instance

class userrepository{
//  1
     async singup(newuser){
        
            try{
            // get the database
            const db =getdb()
        
        
        
            // get the collection
            const collection =db.collection("user")
        
        
        

          await collection.insertOne(newuser)

          return newuser
            }
            
        
        
            catch(err){
                console.log(err)
            }
        
        
        }   
        
        


// 2
        async singinusingemail(email){
        
            try{
            // get the database
            const db =getdb()
        
        
        
            // get the collection
            const collection =db.collection("user")
        
        
        // find the documenat

      return  await collection.findOne({email})
    
            }
            
        
        
            catch(err){
                console.log(err)
            }
        
        
        }        




}


export default userrepository