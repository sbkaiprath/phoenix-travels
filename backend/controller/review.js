const asyncHandler=require('../middlewares/async')
const Review=require('../models/Review');
const ErrorResponce = require('../utils/ErrorResponce');

//CREATE Review
//private @customers and admin only
exports.addReview=asyncHandler(async(req,res,next)=>{
  
const review= await Review.create(req.body);

if (!review){
    return next(new ErrorResponce(`Error in creating the review`,406));
}
res.status(201).json({success: true,data:review});

});

//GET Review
//Private @admin

exports.getAllReviews=asyncHandler(async(req,res,next)=>{

    const review= await Review.findAll();

    if(!review){
        return next(new ErrorResponce(`Error in retrieving the tour`,406));
    }
    res.status(200).json({success: true,data:review});

});

//GET Single Review
//Private @user only
exports.getSingleReview=asyncHandler(async(req,res,next)=>{

    const review=await Review.findByPk(req.params.id);

    if(!review){
        return next(new ErrorResponce(`Error in retrieving the review`,406));
    }
    res.status(200).json({success: true,data:review});

});



//DELETE Review
//Private @user

exports.deleteSingleReview=asyncHandler(async(req,res,next)=>{

  const review=await Review.destroy({where:{id:req.params.id}})

    if(!review){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

//DELETE all Review
//Private @user
exports.deleteAllReview=asyncHandler(async(req,res,next)=>{

  const review=await Review.destroy({where:{},truncate:true});

    if(!review){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

