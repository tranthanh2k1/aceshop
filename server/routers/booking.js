const express = require("express");
const { create, updateStatusAdmin, listBooking , listBookingUser , listBookingUserStatus} = require("../controllers/booking.js");
const router = express.Router();

router.post("/booking", create);
router.put("/booking/:id", updateStatusAdmin);
router.get("/booking", listBooking);
router.get("/booking/:userId", listBookingUser); 
router.get("/booking", listBookingUserStatus);
   
module.exports = router;
