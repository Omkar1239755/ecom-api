
export default class usermodell{


    constructor (id,name, email,password,type){
    this.id=id
    this.name=name
    this.email=email
    this.password=password
    this.type=type
    }
    


static singup(name,email,password,type){

const newuser=new usermodell(user.length+1,name,email,password,type)


user.push(newuser);
return newuser


}


static singin(email,password){

const abc= user.find((u)=>u.email==email && u.password==password)
return abc;

}



static get(){
 return user   
}



}





let user= [{
    id:'1',
    name:'omkar',
    email:"omkar@gamil.com",
    password:"1234",
    type:"user",
    },]
    
    
    
    
    