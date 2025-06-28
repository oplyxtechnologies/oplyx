const express = require("express");
const {
  validateEnquiry,
  validateCourseEnquiry,
} = require("../validator/enquiry.validate");
const {
  createEnquiry,
  submitCourseEnquiry,
  getAllEnquiries,
  getAllCourseEnquiries,
} = require("../controller/enquiry.controller");

const router = express.Router();

router.post("/submit", validateEnquiry, createEnquiry);
router.get("/all", getAllEnquiries);
router.post(
  "/submit-course-enquiry",
  validateCourseEnquiry,
  submitCourseEnquiry
);
router.get("/course-enquiries", getAllCourseEnquiries);

module.exports = router;
