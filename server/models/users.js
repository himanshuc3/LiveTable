const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleID: String,
    fullName: String,
    email: String,
})

mongoose.model('users', userSchema)