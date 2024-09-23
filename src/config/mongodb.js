import { MongoClient } from "mongodb";

const url ="mongodb://localhost:27017"

const dbname='ecomdb'
let client;

 export const connectmongodb=()=>{


    MongoClient.connect(url)

      .then(clientinstant=>{
          

        client=clientinstant
        
        console.log("mongodb is connected")}


      )
    }



      export const getdb =()=>{
        // ECOMDB IS A NAME OF DB
        return client.db(dbname)

      }
      

