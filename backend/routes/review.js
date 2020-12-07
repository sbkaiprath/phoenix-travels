const express=require('express');

const {addReview,getAllReviews,getSingleReview,deleteAllReview,deleteSingleReview}=require('../controller/review');

const {authorize,protect}=require('../middlewares/auth')
const router=express.Router()

router.route("/")
.post(protect,addReview)
.get(protect,authorize('admin'),getAllReviews)
.delete(protect,authorize('admin'),deleteAllReview);

router.route("/:id")
.get(protect,authorize('admin'),getSingleReview)
.delete(protect,authorize('admin'),deleteSingleReview);


module.exports=router;