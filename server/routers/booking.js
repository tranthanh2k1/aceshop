const express = require("express");
const {
  create,
} = require("../controllers/booking.js");
const router = express.Router();

router.post("/booking", create);

// router.param("id", bookingID);

module.exports = router;