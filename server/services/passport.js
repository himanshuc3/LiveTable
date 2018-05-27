const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')
const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user))
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/login/auth/google/callback',
    proxy: true
},(accessToken, refreshToken, profile, done) => {
    User.findOne({googleID: profile.id})
        .then((existingUser) =>{
            if(existingUser){
                //User already exists
                done(null, existingUser)
            }else{
                //Add user
                new User({googleID: profile.id})
                    .save()
                    .then(user => done(null, user))
            }
        })
}))