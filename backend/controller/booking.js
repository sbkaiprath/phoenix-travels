const asyncHandler=require('../middlewares/async')
const Booking=require('../models/Booking');
const ErrorResponce = require('../utils/ErrorResponce');
//const User=require('../models/User')

//CREATE BOOKING
//private @customers and admin only
exports.bookNow=asyncHandler(async(req,res,next)=>{

 req.body.userId=req.user.id;   
const book= await Booking.create(req.body);

if (!book){
    return next(new ErrorResponce(`Error in creating the tour`,406));
}
res.status(201).json({success: true,data:book});

});

//GET booking
//Private @user

exports.getAllBookings=asyncHandler(async(req,res,next)=>{

    const tour= await Booking.findAll();

    if(!tour){
        return next(new ErrorResponce(`Error in retrieving the tour`,406));
    }
    res.status(200).json({success: true,data:tour});

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
    let tour=await Booking.findByPk(req.params.id);


    if(tour.id.toString()!==req.user.id || req.user.role!=='admin'){
        return next(new ErrorResponce(`User with ${req.user.id} not authorised to access`,406));
    }

      tour=await Booking.update(req.body,{
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

    let tour=await Booking.findByPk(req.params.id);


    if(tour.id.toString()!==req.user.id || req.user.role!=='admin'){
        return next(new ErrorResponce(`User with ${req.user.id} not authorised to access`,406));
    }


     tour=await Booking.destroy({where:{id:req.params.id}})

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

//DELETE all Booking
//Private @user
exports.deleteAllBooking=asyncHandler(async(req,res,next)=>{
    let tour=await Booking.findByPk(req.params.id);


    if(tour.id.toString()!==req.user.id || req.user.role!=='admin'){
        return next(new ErrorResponce(`User with ${req.user.id} not authorised to access`,406));
    }
     tour=await Booking.destroy({where:{},truncate:true});

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

