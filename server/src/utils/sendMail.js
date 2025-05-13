const { SMTP_EMAIL, SMTP_PASSWORD } = require("../config/env");
const nodemailer = require("nodemailer");

const transporterInfo = {
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
};

async function sendMail(mailInfo) {
  try {
    const transporter = nodemailer.createTransport(transporterInfo);
    const info = await transporter.sendMail(mailInfo);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw {
      status: 400,
      message: error.message,
    };
  }
}

module.exports = sendMail;
