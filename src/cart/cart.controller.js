import cartmodell from "./cart.modell.js";
import cartrepository from "./cart.repository.js";


export default class cartcontroller{

    constructor(){
this.cartrepository=new cartrepository()

    }


    
// 1
async add(req,res){
const {productid,quantity} =req.body

const userid = req.userid
// thi user id is been taking from token
await this.cartrepository.addtocart(productid,userid,quantity)
res.status(201).send("cart is updated");
}

// 2
get(req,res){

// thi user id is been taking from token

const userid=req.userid
const abc= this.cartrepository.get(userid)
res.send(abc)



}
// 3
deletecart(req,res){}



}