const asyncHandler=require('../middlewares/async')
const Booking=require('../models/Booking');
const ErrorResponce = require('../utils/ErrorResponce');

//CREATE BOOKING
//private @customers and admin only
exports.bookNow=asyncHandler(async(req,res,next)=>{

const tour= await Booking.create(req.body);

if (!tour){
    return next(new ErrorResponce(`Error in creating the tour`,406));
}

res.status(201).json({success: true,data:tour});

});

//GET booking
//Private @user

exports.getAllBookings=asyncHandler(async(req,res,next)=>{

res.status(200).json(res.advancedResults);

});

//GET Single Booking
//Private @user only
exports.getSingleBooking=asyncHandler(async(req,res,next)=>{

    const tour=await Booking.findByPk(req.params.id);

    if(!tour){
        return next(new ErrorResponce(`Error in retrieving the item`,406));
    }
    res.status(200).json({success: true,data:tour});

});

//PUT Update Booking
//Private @user
exports.updateBooking=asyncHandler(async(req,res,next)=>{

    const tour=await Booking.update(req.body,{
        where:{id:req.params.id}
    });

    if(!tour){
        return next(new ErrorResponce(`Error in updating the item`,406));
    }
    res.status(200).json({success: true,data:tour});

});

//DELETE Booking
//Private @user

exports.deleteSingleBooking=asyncHandler(async(req,res,next)=>{

    const tour=await Booking.destroy({where:{id:req.params.id}})

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

//DELETE all Booking
//Private @user
exports.deleteAllBooking=asyncHandler(async(req,res,next)=>{

    const tour=await Booking.destroy({where:{},truncate:true});

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

