require('dotenv').config();
const express = require('express');
const app = express();
const geoCode = require('./geoCode.js');

//????????????????????????????????????
app.use(express.static('./public'))


app.get('/temperature/:city', (req, res)=>{
    res.send('')
})

//geoCode(process.argv[2]);



//const port = 5000;

//app.listen(5000/*, () => console.log(`Server listening on port ${port}`)*/);