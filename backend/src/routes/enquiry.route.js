const express = require("express");
const validateEnquiry = require("../validator/enquiry.validate");
const { createEnquiry } = require("../controller/enquiry.controller");

const router = express.Router();

router.post("/create", validateEnquiry, createEnquiry);

module.exports = router;
