


export default class cartmodell{


constructor(productid,userid,quantity,id){

this.productid=productid
this.userid=userid
this.quantity=quantity
this._id=id

}


static add(productid,userid,quantity){

const cart=new cartmodell(productid,userid,quantity);

cart.id=cartitem.length+1;
cartitem.push(cart)
return cart
}



static get(userid){
    return  cartitem.filter((u)=>u.userid==userid)



}




}
let cartitem = [new cartmodell(1,1,2,1)]