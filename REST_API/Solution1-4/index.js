//allowed acess from anywhere for mongoDB db

var express = require('express');
var routes = require('./routes/api');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://test:test@cluster0.tfqi1.mongodb.net/inventory1');
//mongoose.connect('mongodb://localhost/inventory');

app.use(routes);

app.use(function(err, request, response, next){
    response.send({"error" : err.message});
});

app.listen('8081', () =>{
    console.log("Listening to your requests");
})