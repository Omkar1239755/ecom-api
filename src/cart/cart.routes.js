import express from 'express'
import cartcontroller from './cart.controller.js'



const cartroute = express.Router()

const abc=  new cartcontroller()



cartroute.post('/addcart',abc.add)
cartroute.get('/get',abc.get)

export default cartroute 