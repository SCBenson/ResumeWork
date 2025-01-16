import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { config } from "firebase-functions"; // Add this line
import nodemailer from "nodemailer";

initializeApp();
// we need transporter for nodemailer: transporter is used to send the email.
const apiKey = config().sendgrid.key;
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: apiKey,
  },
});

export const sendEmail = onRequest((request, response) => {
  const first_name = request.query.first_name;
  const last_name = request.query.last_name;
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: "ResumeWork <letusresumework@gmail.com>",
    to: "letusresumework@gmail.com",
    subject: "ResumeWork Contact Form Submission",
    html: `${message} <br><br> From ${email_from}`,
  };

  // eslint-disable-next-line no-unused-vars
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(
        `ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`
      );
      response.send(error.toString());
    }
    response.send(
      `Sender: ${first_name} ${last_name} <br> Description: <br> ${message}`
    );
  });
});
