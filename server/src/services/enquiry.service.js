const {
  contactFormMail,
  notifyAdminEnquiryMail,
  courseEnquiryMail,
  notifyAdminCourseEnquiryMail,
} = require("../lib/mail/Mail");
const CourseEnquiry = require("../model/courseEnquiry.model");
const Enquiry = require("../model/enquiry.model");

async function createEnquiryService({
  name,
  email,
  phoneNumber,
  message,
  service,
}) {
  let result;

  try {
    result = await Enquiry.create({
      name,
      email,
      phoneNumber,
      message,
      service,
    });
  } catch (error) {
    throw new Error(`Failed to create enquiry: ${error.message}`);
  }

  try {
    await contactFormMail({ name, receiver: email });
    await notifyAdminEnquiryMail({
      name,
      email,
      phoneNumber,
      message,
      service,
    });
  } catch (error) {
    console.log(error);

    throw new Error(
      `Enquiry created, but failed to send email: ${error.message}`
    );
  }

  return result;
}

async function submitCourseEnquiryService({
  fullName,
  email,
  phoneNumber,
  course,
  message,
}) {
  console.log(fullName, email, phoneNumber, course, message);
  let result;

  try {
    result = await CourseEnquiry.create({
      fullName,
      email,
      phoneNumber,
      course,
      message,
    });
  } catch (error) {
    throw new Error(`Failed to create course enquiry: ${error.message}`);
  }

  try {
    await courseEnquiryMail({ fullName, email });
    await notifyAdminCourseEnquiryMail({
      fullName,
      email,
      phoneNumber,
      course,
      message,
    });
  } catch (error) {
    throw new Error(
      `Course enquiry created, but failed to send email: ${error.message}`
    );
  }

  return result;
}

module.exports = { createEnquiryService, submitCourseEnquiryService };
