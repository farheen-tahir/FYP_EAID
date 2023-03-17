const Subscribers=require("../models/subscriberModel");
const nodemailer = require('nodemailer');

const subscribeMail=()=>{
// Create a transporter object for sending email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eaidsystem@gmail.com',
      pass: 'ckedqwsungifvhfr'
    }
  });
//   41b711a5c42440309e3dc179c03f984e
  // Query the database to get all user email addresses
  Subscribers.find({}, (err, subscribers) => {
    if (err) {
      console.log(err);
    } else {
      // Loop through the users and send an email to each one
      subscribers.forEach(subscriber => {
        const mailOptions = {
          from: 'eaidsystem@gmail.com',
          to: subscriber.email,
          subject: 'New Data Available',
          text: 'Dear ' + subscriber.name + ',\n\nNew data is now available for you to view.'
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      });
    }
  });
}
module.exports=subscribeMail;