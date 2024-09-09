import express from 'express';
import productcontroller from './product.controller.js';

const router=express.Router();

const abc=new productcontroller();



// all the path to controller
// localhost/api/product


router.get("/",abc.getallproduct)
router.post()





export default router