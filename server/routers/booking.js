const express = require("express");
const { create, updateStatusAdmin, listBooking } = require("../controllers/booking.js");
const router = express.Router();

router.post("/booking", create);
router.put("/booking/:id", updateStatusAdmin);
router.get("/booking", listBooking);

module.exports = router;
