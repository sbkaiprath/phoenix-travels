const express=require('express');

const {createTourPackage,getAllTourpackages,
    getSinglePAckage,updateTour,deleteAllTour
    ,deleteSingleTour,addPhotoTourPackage}=require('../controller/tourpackage');
const upload=require('../middlewares/upload')    
    
const router=express.Router();

router.route('/').get(getAllTourpackages).post(createTourPackage).delete(deleteAllTour);
router.route('/:id').get(getSinglePAckage).put(updateTour).delete(deleteSingleTour);
router.post('/upload', upload.single("uploadfile"), addPhotoTourPackage);
module.exports=router;
