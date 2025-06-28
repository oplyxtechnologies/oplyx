const {
  createEnquiryService,
  submitCourseEnquiryService,
  getEnquiryService,
  getCourseEnquiryService,
} = require("../services/enquiry.service");

exports.createEnquiry = async (req, res, next) => {
  const { name, email, phoneNumber, message, service } = req.body;
  try {
    await createEnquiryService({
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
    await submitCourseEnquiryService({
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

exports.getAllEnquiries = async (req, res, next) => {
  try {
    const enquiries = await getEnquiryService();
    res.status(200).json({
      success: true,
      enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllCourseEnquiries = async (req, res, next) => {
  try {
    const courseEnquiries = await getCourseEnquiryService();
    res.status(200).json({
      success: true,
      courseEnquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
