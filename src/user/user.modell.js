

export default class usermodell{
 constructor (name, email,password,type,id){

    this.name=name
    this.email=email
    this.password=password 
    this.type=type
    this._id=id
    }










    // user repositry me shift
    

// // 1
//  static async singup(name,email,password,type){
    
//     const db =getdb()
    
//     const collection=db.collection("user")

// const newuser = new usermodell(name,email,password,type)
// await collection.insertOne(newuser);
// return newuser

// // user.push(newuser);
// // return newuser


// }

// // 2
// static singin(email,password){

// const abc= user.find((u)=>u.email==email && u.password==password)
// return abc;

// }


// 3




static get(){
 return user   
}



}




//  dqatabase aa gya
// let user= [{
//     id:'1',
//     name:'omkar',
//     email:"omkar@gamil.com",
//     password:"1234",
//     type:"user",
//     },]
    
    
    
    
    