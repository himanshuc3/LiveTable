const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')
const keys = require('../../client/src/config/keys')
require('../models/user')
const User = mongoose.model('users')

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user))
})

//Refactored promises ( .then().catch() syntax)
//with async and await.

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/login/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleID: profile.id})

    if(existingUser){
        //User already exists
        done(null, existingUser)
    }
    //Add user
    const user = await new User({
        googleID: profile.id,
        fullName: profile.displayName,
        email: profile.emails[0].value
        })
        .save()
    done(null, user)
}))