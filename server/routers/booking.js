const express = require("express");
const {
  create,
  updateStatusAdmin,
  getBookingStatusUser,
  getListBookingUser,
  listBooking,
  detailBooking,
} = require("../controllers/booking.js");
const { verifyToken } = require("../middleware/auth.js");
const router = express.Router();

// api admin
router.get("/booking", listBooking);
router.get("/booking/detail/:id", detailBooking);
router.put("/booking/:id", updateStatusAdmin);

// api user
router.post("/booking", create);
router.get("/booking/user", verifyToken, getListBookingUser);
router.get("/booking/user/status", verifyToken, getBookingStatusUser);

module.exports = router;
