const express=require('express');

const {createTourPackage,getAllTourpackages,
    getSinglePAckage,updateTour,deleteAllTour
    ,deleteSingleTour,addPhotoTourPackage}=require('../controller/tourpackage');
const upload=require('../middlewares/upload')   
const {protect,authorize}=require('../middlewares/auth') 
    
const router=express.Router();

router.route('/').get(protect,getAllTourpackages).post(protect,authorize('admin'),createTourPackage).delete(protect,authorize('admin'),deleteAllTour);
router.route('/:id').get(protect,getSinglePAckage).put(protect,authorize('admin'),updateTour).delete(protect,authorize('admin'),deleteSingleTour);
router.post('/upload', upload.single("uploadfile"), addPhotoTourPackage);
module.exports=router;
