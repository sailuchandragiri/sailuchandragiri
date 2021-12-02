const jwt = require("jsonwebtoken");

require('dotenv').config();

function verifyToken(token){
    return new Pomise(function(resolve, reject){
        jwt.verify(token, process.env.JWT_SECRETE_KEY, function(err, user){
            if(err) return reject(err);
            return resolve(user);
        });

    })
}

async function authenticate(req, res, next){
    const bearerToken = req.headers.authorization;

    if(!bearerToken || !bearerToken.startswith('Bearer')){
        return res.status(403).send({status:"failed", message:"Invalid token"})
    }

    const token = bearerToken.split(' ')[1];

    try{
        const { user } = await verifyToken(token);
        console.log(user);

        req.user = user;

        return next();
    }catch(err){
        return res.status(403).send({status: "failed", message:"Invalid Token"});
    }
}

module.exports = authentication;