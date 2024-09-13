import express from 'express';
import productcontroller from './product.controller.js';
import { upload } from '../middleware/multer.js';

const router=express.Router();

const abc=new productcontroller();



// all the path to controller
// localhost/api/product


router.get("/",abc.getallproduct)


// post req to a server with a multer middleware
router.post('/', upload.single('imageUrl'), abc.addproduct)


router.get('/:id',abc.getoneproduct)

router.post('/rate',abc.rateproduct)


export default router