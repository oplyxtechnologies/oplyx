const { contactFormMail, notifyAdminEnquiryMail } = require("../lib/mail/Mail");
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
    throw new Error(
      `Enquiry created, but failed to send email: ${error.message}`
    );
  }

  return result;
}

module.exports = createEnquiryService;
