const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async function (req, res){
    const users = await User.find().lean().exec();

    return res.send(users);
})

module.exports = router;