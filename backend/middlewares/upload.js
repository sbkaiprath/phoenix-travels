const multer = require('multer');
//const path=require('path');
 
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpg' || file.mimetype==='image/png'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
 
var upload = multer({storage: storage});
 
module.exports = upload;