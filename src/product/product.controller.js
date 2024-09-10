
import productmodell from "./product.modell.js";

export default class productcontroller{


// this is used to get the product
getallproduct(req,res){


    const product=productmodell.getall()
    res.send(product)


}



 
// to add a product in a array later we will add a database
addproduct(req,res){

const{name,price,sizes}= req.body;

const newproduct={
name,
price:parseFloat(price),
sizes: sizes.split(','),
imageUrl:req.file.filename,
}

const result=productmodell.addproduct(newproduct);
res.send(result);

}





 

rateproduct(req,res){}
 








getoneproduct(req,res){

const id=req.params.id;
const result=productmodell.getone(id)
 return res.send(result);

}
 



}