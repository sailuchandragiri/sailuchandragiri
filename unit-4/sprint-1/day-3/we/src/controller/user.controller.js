const express = require('express');

const sendMail = require("../utils/sendmail");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async function(req, res){
    //if page=1 then show from 1 to 10 
    //if page=2 then show from 11 to 20
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const offset = (page-1) * size;

    const users = await User.find().skip(offset).limit(size).lean().exec();

    const totalUserCount = await User.find().countDocuments();

    const totalPages = Math.ceil(totalUserCount/size);

    sendMail({
      from: "sailuchandragiri@gmail.com",
      to: "a@send.com",
      subject: "Message title",
      text: "Plaintext version of the message",
      html: "<h1>MVC pattern new version</h1>"
    })

    
    return res.send({users, totalPages})
})

module.exports = router;    