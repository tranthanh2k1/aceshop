const express = require('express');
const { createQuote } = require("../controllers/quote")
const router = express.Router();

router.post("/addQuote", createQuote);

module.exports = router;