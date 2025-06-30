const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASSWORD,
        },
    });
    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New contact form submission from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.send("Error sending message.");
      } else {
        console.log("Email sent:" + info.response);
        res.send("Message sent successfully!");
      }
    });
});

app.listen(PORT, () => {
    console.log(`server is running on "${PORT}`);
});