const pug = require("pug");
const path = require("path");
const sendMail = require("../../utils/sendMail");
const { PANDA_MAIL } = require("../../config/env");

async function contactFormMail({ receiver, name }) {
  const htmlContent = pug.renderFile(
    path.join(__dirname, "./template/enquiry-mail.jade"),
    {
      name: name,
    }
  );
  try {
    await sendMail({
      from: '"oplyx.tech" <connectoplyx@gmail.com>',
      to: receiver,
      subject: "Thank you for getting in touch with Oplyx!",
      html: htmlContent,
    });
  } catch (error) {}
}

async function notifyAdminEnquiryMail({
  name,
  email,
  phoneNumber,
  message,
  service,
}) {
  const htmlContent = pug.renderFile(
    path.join(__dirname, "./template/admin-enquiry-mail.jade"),
    {
      name: name,
      email: email,
      phone: phoneNumber,
      message: message,
      service: service,
    }
  );
  try {
    await sendMail({
      from: '"Contact Form" <connectoplyx@gmail.com>',
      to: PANDA_MAIL,
      subject: "New enquiry alert !",
      html: htmlContent,
    });
  } catch (error) {}
}

module.exports = { contactFormMail, notifyAdminEnquiryMail };
