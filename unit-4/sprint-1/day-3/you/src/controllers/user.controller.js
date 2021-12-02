
const express = require('express');
const sendMail = require("../utils/sendmail.utils");
const router = express.Router();
const User = require('../models/user.model');
const Admin = require('../models/admin.model');


//crud operation for posting the user data
router.post("", async(req, res) => {
    const user = await User.create(req.body);
    res.status(201).send(user);
})


//crud operation to get the user data
router.get("", async(req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page - 1) * size;
    const user = await User.find().skip(offset).limit(size).lean().exec();
    const admin = await Admin.find().lean().exec();
    const total_pages = Math.ceil(await User.find().countDocuments().lean().exec() / size);

    for (let i = 0; i < user.length; i++) {
        
        sendMail({
            from: "sailuchandragiri@gmail.com",
            to: `${user[i].email}`,
            subject: `Welcome to ABC system ${user[i].first_name} ${user[i].last_name}`,
            text: `Hello ${user[i].first_name}, Please confirm your email address`,
            html: "<p>Users Detais of Each Users</p>",
        })

        for (let j = 0; j < admin.length; j++) {
            console.log(admin[j].first_name);
            sendMail({
                from: "sailuchandragiri@gmail.com",
                to: `${admin[j].email}`,
                subject: `${user[i].first_name} ${user[i].last_name} has registered with us`,
                text: `welcome ${user[i].first_name} ${user[i].last_name}`,
                html: "<p>Details of Each admins</p>",
            })
        }
    }
    res.status(200).send({ user, total_pages });

})


module.exports = router;