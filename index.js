//Nodejs uses commonJS moule system require('app')
const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send({pro: 'ject!'})
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);