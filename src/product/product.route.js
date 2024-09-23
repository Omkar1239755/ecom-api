import express from 'express';
import productcontroller from './product.controller.js';
import { upload } from '../middleware/multer.js';

const router=express.Router();

const abc=new productcontroller();



// all the path to controller
// localhost/api/product


router.get("/",abc.getallproduct)


// post req to a server with a multer middleware
router.post('/',   upload.single('imageUrl')  ,    (req,res)=>{abc.addproduct(req,res)} )

// 2
router.get('/:id', (req,res)=>{abc.getoneproduct(req,res)})


// 3
router.post('/rate', (req,res)=>{abc.rateproduct(req,res)})


export default router