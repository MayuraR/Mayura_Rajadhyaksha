const { request, response } = require('express');
var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, '/templates'));

app.get('/', (request, response)=>{
    response.render('index',{date: new Date().toDateString()});
});

app.listen('3000');