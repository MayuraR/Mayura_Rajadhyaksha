var express = require('express');
var app = express();
var datetime = new Date();

//run $env:PORT=5000 and then node app to run on port 5000

const PORT = process.env.PORT || 8080;

//console.log('Hiii');
app.get("/", function(request, response) {
    response.send(`Hello world `);
});

app.get("/time", function(request, response) {
    
    response.send(datetime);
});


app.listen(PORT);

