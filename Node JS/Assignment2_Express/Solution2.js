var express = require('express');
var app = express();

app.get("/year", function(request, response) {
    var age = request.param('age');
    response.end(`You wre born in ${2020 - age}`);
});

app.listen('3000');
//console.log('Hello');