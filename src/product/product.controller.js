
import productmodell from "./product.modell.js";
import productrepository from "./product.repository.js";

export default class productcontroller{

// database
constructor(){
    this.productrepository=new productrepository()
}




// this is used to get the product
getallproduct(req,res){


    const product=this.productrepository.getall()
    res.send(product)
}
 





// to add a product in a array later we will add a database
async addproduct(req,res){

const{name,price,sizes}= req.body;

const newproduct=new productmodell(name ,null, parseFloat(price) , req.file.filename,null, sizes.split(','))



const result = await this.productrepository.add(newproduct);
res.send(result);

}





 
// 3
async rateproduct(req,res){
    
const userid=req.body.userid
const productid=req.body.productid
const rating=req.body.rating

const error = await this.productrepository.rate(userid,productid,rating)
if(error){

    return  res.send(error)
}
else{
    return res.send("rating done")
}
}
 








 async getoneproduct(req,res){
try{
    const id=req.params.id;
    const result= await this.productrepository.get(id)
    return res.send(result);
}

catch(err){
console.log(err)
}

}
 



}