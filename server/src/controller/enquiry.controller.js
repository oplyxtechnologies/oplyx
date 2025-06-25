const {
  createEnquiryService,
  submitCourseEnquiryService,
} = require("../services/enquiry.service");

exports.createEnquiry = async (req, res, next) => {
  const { name, email, phoneNumber, message, service } = req.body;
  try {
    const result = await createEnquiryService({
      name,
      email,
      phoneNumber,
      message,
      service,
    });
    res.status(201).json({
      success: true,
      message: "Enquiry Submitted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.submitCourseEnquiry = async (req, res, next) => {
  const { fullName, email, phoneNumber, course, message } = req.body;
  try {
    const result = await submitCourseEnquiryService({
      fullName,
      email,
      phoneNumber,
      course,
      message,
    });
    res.status(201).json({
      success: true,
      message: "Course Enquiry Submitted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
    console.log(error.message);
  }
};
