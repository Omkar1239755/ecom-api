import cartmodell from "./cart.modell.js";



export default class cartcontroller{
// 1
add(req,res){
const {productid,quantity} =req.query

const userid = req.userid
// thi user id is been taking from token
cartmodell.add(productid,userid,quantity)
res.status(201).send("cart is updated");
}

// 2
get(req,res){

// thi user id is been taking from token

const userid=req.userid
const abc=cartmodell.get(userid)
res.send(abc)



}
// 3
deletecart(req,res){}



}