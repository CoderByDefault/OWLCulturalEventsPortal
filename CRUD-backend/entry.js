//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

const route = require('./routes/routes');
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

//adding middleware - cors

app.use(cors());

//adding body-parser

app.use(bodyparser.json());

app.use('/api', route);

//Checking Response

app.get('/',(req,res)=>{
    res.send('Some Changes');
});
//start server

app.listen(PORTNUM, ()=>{
    console.log('Server is running at port: '+PORTNUM)
});