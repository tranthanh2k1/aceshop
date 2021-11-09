const express = require("express");
const { create, updateStatusAdmin } = require("../controllers/booking.js");
const router = express.Router();

router.post("/booking", create);
router.put("/booking/:id", updateStatusAdmin);

module.exports = router;
