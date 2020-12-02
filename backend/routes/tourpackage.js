const express=require('express');

const {createTourPackage,getAllTourpackages,
    getSinglePAckage,updateTour,deleteAllTour
    ,deleteSingleTour}=require('../controller/tourpackage');
    
const router=express.Router();

router.route('/').get(getAllTourpackages).post(createTourPackage).delete(deleteAllTour);
router.route('/:id').get(getSinglePAckage).put(updateTour).delete(deleteSingleTour);
//router.route('/:id/photo').put(addPhotoTourPackage);
module.exports=router;
