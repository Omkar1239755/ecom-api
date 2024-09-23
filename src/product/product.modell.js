import usermodell from "../user/user.modell.js";

export default class productmodell{



    constructor(name,desc,price,imageUrl,category,sizes,id){

        this.name=name;
        this.desc=desc;
        this.price=price;
        this.imageUrl=imageUrl;
        this.category=category;
        this.sizes=sizes;
        
        this._id=id;
        

    }


    // static getall(){

    //     return products
    // }


    // static getone(id){
    //   const find=products.find((v)=>v.id==id);
    //   return find;

    // }


    // static addproduct(newproduct){

    // newproduct.id=products.length+1;

    // products.push(newproduct);
    // return products;
    // }

// rate a product

// static rateproduct(userid,productid,rating){

//   // 1 vallidate user and product
  
//   const user = usermodell.get().find((u)=>u.id==userid)
  
//   if(!user){
//     return 'user not found'
//   }
  
  
  
  
//   // 2 vallidate product
//   const product=products.find((u)=>u.id==productid)
  
//   if(!product){
//     return 'product not found'
//   }
  
  
  
//   // check if there is any existing rating 
  
//   if(!product.ratings){
  
//   product.ratings=[];
//   product.ratings.push=({
  
//   userid:userid,
//   rating:rating
  
//   })
  
//   }
  
  
//   else {
  
//     // check if user rationg is already available for that praticaular product
  
//   const existingratingindex   =  product.ratings.findIndex((u)=>u.userid==userid)
  
//   // nhi toh -1 AEGA AGR NHI HOGI RATINGE PAHLE SE TOH YE UPDATE KREGA
//   if(existingratingindex>=0){
  
//   product.ratings[existingratingindex]={
  
//   userid:userid,
//   rating:rating
  
//   }
  
//   }
  
//   else{
//     product.ratings.push({
//       userid:userid,
//       rating:rating
  
//     })
//   }
  
  
  // }
  
     
  



   
    }

  // database aagya
var products = [
    new productmodell(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Cateogory1'
    ),
    new productmodell(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Cateogory2',
      ['M', 'XL']
    ),
    new productmodell(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Cateogory3',
      ['M', 'XL','S']
    )];