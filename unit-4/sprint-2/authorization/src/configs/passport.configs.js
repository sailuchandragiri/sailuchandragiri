require('dotenv').config();

const userModel = require('../models/user.model');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');

const { v4: uuidV4 } = require('uuid');

const { newToken } = require('../controllers/auth.controller')


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:9656/auth/google/callback",
        passReqToCallback: true
    },
    async function(request, accessToken, refreshToken, profile, done) {
    
        const email = profile._json.email;
        let user;

        try {
            user = await userModel.findOne({ email }).lean().exec();

            if (!user) {
                user = await userModel.create({ email: email, password: uuidV4() });
            }
            const token = newToken(user);
            return done(null, { user, token });
        } catch (err) {
            console.log(err);
        }
    }
));


module.exports = passport;