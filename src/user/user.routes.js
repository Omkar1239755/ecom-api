import express from 'express'
import usercontroller from './user.controller.js';


const userrouter=express.Router()

const abc= new usercontroller();

userrouter.post('/singup',(req,res)=>{abc.singup(req,res)})
// database ke funda se hua method alag

userrouter.post('/singin',(req,res)=>{abc.singin(req,res)})



export default userrouter