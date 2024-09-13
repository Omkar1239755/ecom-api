import express from 'express'
import usercontroller from './user.controller.js';


const userrouter=express.Router()

const abc= new usercontroller();

userrouter.post("/singup",abc.singup)
// database ke funda se hua method alag

userrouter.post("/singin",abc.singin)



export default userrouter