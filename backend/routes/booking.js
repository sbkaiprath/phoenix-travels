const express=require('express');

const {bookNow,getAllBookings,getSingleBooking,updateBooking,deleteAllBooking,deleteSingleBooking}=require('../controller/booking');
const {protect,authorize}=require('../middlewares/auth')

const router=express.Router()

router.route("/")
.post(protect,bookNow)
.get(protect,getAllBookings)
.delete(protect,deleteAllBooking);
router.route('/:id')
.get(protect,getSingleBooking)
.put(protect,updateBooking)
.delete(protect,deleteSingleBooking);

module.exports=router;




