var express = require('express');
var app = express();

var process = require('process');

// console.log('Hiii');
app.get("/home", function(request, response) {
    response.end(`Hello world`);
});

var port = process.argv;

app.listen(port[2]);

// console.log(port[2]);