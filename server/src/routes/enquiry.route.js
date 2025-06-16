const express = require("express");
const validateEnquiry = require("../validator/enquiry.validate");
const { createEnquiry } = require("../controller/enquiry.controller");

const router = express.Router();

router.post("/submit", validateEnquiry, createEnquiry);

module.exports = router;
