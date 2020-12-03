const asyncHandler=require('../middlewares/async')
const Tourpackage=require('../models/Tourpackage');
const ErrorResponce = require('../utils/ErrorResponce');
const fs=require('fs');
const Image=require('../models/Image')
const path=require('path')


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

/*exports.addPhotoTourPackage = (req, res) => {  
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(path.join('./public/uploads') + req.file.filename)
    }).then(image => {
      try{
        fs.writeFileSync(path.join( './public/tmp')+ image.name, image.data);    
        
        // exit node.js app
        res.json({'msg': 'File uploaded successfully!', 'file': req.file});
      }catch(e){
        console.log(e);
        res.json({'err': e});
      }
    })
  };*/

exports.addPhotoTourPackage = asyncHandler(async (req, res, next) => {

      
          console.log(req.file);
      
          if (req.file === undefined) {
            return res.send(`You must select a file.`);
          }

          const image=await Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
             "../public/uploads" + req.file.filename
            ),
          });

          fs.writeFileSync(
            "../public/tmp" + image.name,
             image.data
           );
          if(!image){
              return next(new ErrorResponce(`Error when trying upload images: `,404))
          }

          res.send(`File has been uploaded.`);


});