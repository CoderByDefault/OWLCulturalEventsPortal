//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

// instance

var app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/EventsList');

//on connect

mongoose.connection.on('connected',()=>{
    console.log('mongo connection done');
});

//on error

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

//specifying port

const PORTNUM = 3000;

//Checking Response

app.get('/',(res,res)=>{
    res.send('Foobar');
});
//start server

app.listen(PORTNUM, ()=>{
    console.log('Server is running at port: '+PORTNUM)
});