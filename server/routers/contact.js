const express = require("express");
const { create } = require("../controllers/contact.js");
const router = express.Router();

router.post("/contact", create);


module.exports = router;