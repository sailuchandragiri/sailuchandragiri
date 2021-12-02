const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const {CURRENT_ENVIRONMENT, SMTP_PASSWORD, SMTP_USERNAME}=process.env;

const router = express.Router();

const User = require("../models/user.model");

router.get("", async function (req, res) {
    const page = +req.query.page | 1;
    const size = +req.query.size | 10;

    //if page=1 then show 1 to 10 users
    //if page=2 then show 11 to 20 users

    const offset = (page-1)*size;

    const users = await User.find().skip(offset).limit(10).lean().exec();
    const totalUserCount = await User.find().countDocuments();

    const totalPages = Math.ceil(totalUserCount / size); 

    var message = {
        from: "sailuchandragiri@gmail.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
    };

    const transporter = nodemailer.createTransport({
        host: CURRENT_ENVIRONMENT == "development","smtp.mailtrap.io" : "",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: SMTP_USERNAME,
          pass: SMTP_PASSWORD,
        },
      });

    transporter.sendMail(message)

    res.send({users, totalPages});
})

module.exports = router;

