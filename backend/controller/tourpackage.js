const asyncHandler=require('../middlewares/async')
const Tourpackage=require('../models/Tourpackage');
const ErrorResponce = require('../utils/ErrorResponce');
const path=require('path');


//CREATE TOURPACKAGE
//private @admin only
exports.createTourPackage=asyncHandler(async(req,res,next)=>{

const tour= await Tourpackage.create(req.body);

if (!tour){
    return next(new ErrorResponce(`Error in creating the tour`,406));
}

res.status(201).json({success: true,data:tour});

});

//GET Tourpackages
//Public

exports.getAllTourpackages=asyncHandler(async(req,res,next)=>{

const tour= await Tourpackage.findAll();

if(!tour){
    return next(new ErrorResponce(`Error in retrieving the tour`,406));
}
res.status(200).json({success: true,data:tour});

});

//GET Single Tourpackages
//Public
exports.getSinglePAckage=asyncHandler(async(req,res,next)=>{

    const tour=await Tourpackage.findByPk(req.params.id);

    if(!tour){
        return next(new ErrorResponce(`Error in retrieving the item`,406));
    }
    res.status(200).json({success: true,data:tour});

});

//PUT Tourpackages
//Private @admin
exports.updateTour=asyncHandler(async(req,res,next)=>{

    const tour=await Tourpackage.update(req.body,{
        where:{id:req.params.id}
    });

    if(!tour){
        return next(new ErrorResponce(`Error in updating the item`,406));
    }
    res.status(200).json({success: true,data:tour});

});

//DELETE Tourpackages
//Private @admin

exports.deleteSingleTour=asyncHandler(async(req,res,next)=>{

    const tour=await Tourpackage.destroy({where:{id:req.params.id}})

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

//DELETE Tourpackages
//Private @admin
exports.deleteAllTour=asyncHandler(async(req,res,next)=>{

    const tour=await Tourpackage.destroy({where:{},truncate:true});

    if(!tour){
        return next(new ErrorResponce(`Error in deleting the item`,406));
    }
    res.status(200).json({success: true,data:{}});

});

//POST Tourpackages add photo
//Private @admin

exports.addPhotoTourPackage = asyncHandler(async (req, res, next) => {

    const tour = await Tourpackage.findByPk(req.params.id);
    if (!tour) {
        return next(new ErrorResponce(`Tour package not found with id ${req.params.id}`, 404));
    }

    if (!req.files) {
        return next(new ErrorResponce(`Please add a file`, 400));
    }

    //Check if the person owns the bootcamp for updating photo
    /*if (tour.user.id !== req.user.id || req.user.role !== 'admin') {
        return next(new ErrorResponce(`User with id ${req.user.id} is authorized to use`))

    }*/

    //Declare a fileUpload variable
    const doc = req.files.file;

    //Checking if the file is photo(Validation)
    if (!doc.mimetype.startsWith('image')) {
        return next(new ErrorResponce(`Please upload a image`, 400));
    }

    //Checking file upload size
    if (doc.size > process.env.MAX_FILE_UPLOAD) {
        return next(new ErrorResponce(`Cannot be uploaded file size is high`, 404));
    }

    //Creating custom file name
    doc.name = `photo_${tour.id}${path.parse(doc.name).ext}`;

    doc.mv(`${process.env.FILE_UPLOAD_PATH}/${doc.name}`, async err => {
        if (err) {
            console.log(err);
            return next(new ErrorResponce(`Unable to upload the file`, 404));

        }

        await Tourpackage.update({imageURL:doc.name},{
            where:{id:req.params.id}
        });

        res.status(200).json({
            success: true,
            photo: doc.name
        })
    })


});