const express = require('express');
const userModel = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const router = express.Router();

//getting the user data
router.get('', async(req, res) => {
    const user = await userModel.find().lean().exec();
    return res.status(200).send({ user });
})


//posting the user data.
router.post("",
    body("first_name").notEmpty().isLength({ min: 3, max: 15 }).withMessage("First name is required and size between 5 to 20"),
    body("last_name").notEmpty().isLength({ min: 3, max: 15 }).withMessage("Last name is required and size between 5 to 20"),
    body("email").notEmpty().isEmail().withMessage("Enter the valid email address with suffix of @gmail.com"),
    body("pincode").notEmpty().isLength({ min: 6, max: 6 }).withMessage("Enter the valid pincode of size 6"),
    body("age").notEmpty().custom(value => {
        if (value < 0 || value > 100) {
            throw new Error('Select the age  value range from 1 to 100 ');
        }
        return true;

    }),
    body("gender").notEmpty().isLength({ min: 3, max: 10 }).withMessage("select the either male or female or others"),
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await userModel.create(req.body);
            return res.status(201).send(user);
        } catch (err) {
            return res.status(500).json({ err: err })
        }
    }
)

module.exports = router;