const express = require('express');
const { createContact, listContact } = require("../controllers/contact.js")

const router = express.Router();


router.post('/contact' , createContact);
// router.get('/list/contact', listContact);
module.exports = router;