const express = require("express");
const {
  create,
  updateBookingStatusAdmin,
  getBookingStatusUser,
  getListBookingUser,
  listBooking,
  detailBooking,
} = require("../controllers/booking.js");
const { verifyToken, isAdmin } = require("../middleware/auth.js");
const router = express.Router();

// api admin
router.get("/booking", listBooking);
router.get("/booking/detail/:id", detailBooking);
router.put(
  "/booking/updateStatus/:bookingId",
  verifyToken,
  isAdmin,
  updateBookingStatusAdmin
);

// api user
router.post("/booking", create);
router.get("/booking/user", verifyToken, getListBookingUser);
router.post("/booking/user/status", verifyToken, getBookingStatusUser);

module.exports = router;
