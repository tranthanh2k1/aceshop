const express = require("express");
const {
  create,
  updateStatusAdmin,
  getBookingStatusUser,
  getListBookingUser,
  listBooking,
} = require("../controllers/booking.js");
const router = express.Router();

router.post("/booking", create);
router.put("/booking/:id", updateStatusAdmin);
router.get("/booking/status/:userId", getBookingStatusUser);
router.get("/booking", listBooking);

//user
router.get("/booking/:userId", getListBookingUser);

module.exports = router;
