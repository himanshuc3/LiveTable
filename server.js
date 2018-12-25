//Nodejs uses commonJS moule system require('app')
// ------------------------------------------------------
// Import Node Modules...
// ------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')
const apiRoute = require('./server/routes/apiRoutes')
const keys = require('./client/src/config/keys')
const authRoute = require('./server/routes/authRoutes')
require('./server/models/users')
require('./server/services/passport')

// ------------------------------------------------------
// Create the Express app  and config
// ------------------------------------------------------

const app = express()
app.use(cors())
mongoose.connect(keys.mongoURI)

// ------------------------------------------------------
// Passport
// ------------------------------------------------------

// ------------------------------------------------------
// Routes
// ------------------------------------------------------


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const pusher = new Pusher({
    appId: keys.pusherAppID,
    key: keys.pusherKey,
    secret: keys.pusherSecret,
    cluster: keys.pusherCluster,
    encrypted: true
});
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, //30 days
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())


app.post('/addEvent', (req,res)=>{
    const eventDetails = req.body;
    pusher.trigger('timetable', 'addEvent', eventDetails);
    res.send(req.body);
});

app.post('/blockEvent', (req,res)=>{
    const eventDetails = req.body;
    pusher.trigger('timetable', 'blockEvent', eventDetails);
    res.send(req.body);
});

app.post('/people', (req,res)=>{
    const username = req.body.username;
    pusher.trigger('timetable', 'peopleAdd', username);
    res.send(username);
});

app.get('/', (req,res)=>{
    res.send(json)
})

app.use('/login', authRoute)
app.use('/api', apiRoute)




if(process.env.NODE_ENV === 'production'){
    //Serving assets in production from build directory
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the file
    const path = require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
