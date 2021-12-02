const jwt = require('jsonwebtoken');

require("dotenv").config();

const userModel = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register = async(req, res) => {
    let user;
    try {
        user = await userModel.findOne({ email: req.body.email });
        
        if (user) {
            
            return res.status(400).send({ message: 'The entered Email and password already exists' })
        }
       
        user = await userModel.create(req.body);
        
        const token = newToken(user);

        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ status: "Failed", message: err.message })
    }
}

const login = async(req, res) => {

    let user;
    try {

        user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(403).send({ status: "Failed", message: "Please check the entered email and password" })
        }

        let match = user.checkPassword(req.body.password);

        if (!match) {
            return res.status(403).send({ status: "failed", message: "Please check your email and password" })
        }


        const token = newToken(user);

        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ status: "failed", message: "Sorry ! something went wrong please check" })
    }
}


module.exports = { register, login, newToken };