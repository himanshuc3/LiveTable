var express = require('express')
var router = express.Router()
var passport = require('passport')
require('../services/passport')


router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req,res) => {
        res.redirect('/timetable')
    }
)

module.exports = router