
const express = require('express');
const router = express.Router();
const app = express();
const Admin = require("../models/admin.model");
app.use(express.json());

router.post("", async(req, res) => {
    const admin = await Admin.create(req.body);
    res.status(201).send(admin);
});

router.get("", async(req, res) => {
    const admin = await Admin.find().lean().exec();
    res.status(200).send(admin);
})

module.exports = router;