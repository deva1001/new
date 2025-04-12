// mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: 'saikiran929o38@gmail.com',
    pass: 'rrxedrvltbrjovzx',
  },
});

module.exports = transporter;