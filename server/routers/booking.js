const express = require("express");
const {
  create,
  updateStatusAdmin,
  getBookingStatusUser,
  getListBookingUser,
  listBooking,
  detailBooking,
} = require("../controllers/booking.js");
const router = express.Router();

// admin
router.post("/booking", create);
router.get("/booking", listBooking);
router.get("/booking/detail/:id", detailBooking);
router.put("/booking/:id", updateStatusAdmin);
router.get("/booking/status/:userId", getBookingStatusUser);

//user
router.get("/booking/:userId", getListBookingUser);

module.exports = router;
