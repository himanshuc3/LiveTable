//Nodejs uses commonJS moule system require('app')
// ------------------------------------------------------
// Import Node Modules...
// ------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors');
// ------------------------------------------------------
// Create the Express app
// ------------------------------------------------------

const app = express();
app.use(cors());

// ------------------------------------------------------
// Load the middlewares
// ------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const pusher = new Pusher({
    appId: '519915',
    key: 'bd15491c4e703db76122',
    secret: '9988d4fdb3f1da24f86f',
    cluster: 'ap2',
    encrypted: true
});

app.post('/', function(req,res){
    pusher.trigger('presence-counter', 'online-presence');
    res.send({});
});


if(process.env.NODE_ENV === 'production'){
    //Serving assets in production from buil directory
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