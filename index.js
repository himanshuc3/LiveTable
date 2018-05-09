//Nodejs uses commonJS moule system require('app')
const express = require('express');
const app = express();


if(process.env.NODE_ENV === 'production'){
    //Serving static files(production assets)
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the file
    const path = require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);