const express = require("express");
const {
  validateEnquiry,
  validateCourseEnquiry,
} = require("../validator/enquiry.validate");
const {
  createEnquiry,
  submitCourseEnquiry,
} = require("../controller/enquiry.controller");

const router = express.Router();

router.post("/submit", validateEnquiry, createEnquiry);
router.post(
  "/submit-course-enquiry",
  validateCourseEnquiry,
  submitCourseEnquiry
);

module.exports = router;
