const express = require("express");

const User = require("../models/user.model");

const router = express.Router();


router.post("", async function(req, res) {
    const user = await User.create(req.body);

    res.status(201).send({user});
})

router.get("", async function(req, res){
    const user = await User.find({}).lean().exec();

    res.status(200).send({user});
})

module.exports = router;