const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRETE_KEY);
}

const register = async(req, res)=> {
    let user;
    try{
        user = await User.findOne({email: rq.body.email});
        if(user){
            return res.status(400).send({message: "Email & Password are already exists"});
        }
        user = await User.create(req.body);
        const token = newToken(user);
        return res.status(200).send({user, token});
    }catch(err){
        return res.status(400).send({status: "failed", message:"please check the email and password"});
    }
}

const login = async(req, res) => {
    let user;
    try{
        user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(400).send({status:"failed", message:"please check your email and password"});
        }

        let match = user.checkPassword(req.body.password);

        if(!match){
            return res.status(400).send({status:"failed", message:"please check"});

        }
        const token = newToken(user);

        return res.status(200).send({user,token});

    }catch(err){
        return res.status(400).send({status:"failed", message:"please check your mail and passwoe"});

    }
}

module.exports = {register, login, newToken};