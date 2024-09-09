
import productmodell from "./product.modell.js";

export default class productcontroller{



getallproduct(req,res){


    const product=productmodell.getall()
    res.send(product)


}
 

addproduct(req,res){}
 

rateproduct(req,res){}
 

getoneproduct(req,res){}
 



}