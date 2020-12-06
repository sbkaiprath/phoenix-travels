
const multer = require('multer');

 
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.FILE_UPLOAD_PATH )
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
 
var upload = multer({storage: storage,fileFilter:fileFilter});
 
module.exports = upload;