const nodemailer = require('nodemailer');
const sendInBlue = require('nodemailer-sendinblue-transport');

const getEmailTemplate = require('./getEmailTemplate');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport(
    sendInBlue({
      apiKey: process.env.V2_API_KEY,
    })
  );
  const message = {
    from: `${process.env.FROM_NAME}<${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: getEmailTemplate(options.healthData.data),
  };

  const info = await transporter.sendMail(message);
  console.log(info);
};

module.exports = sendEmail;
