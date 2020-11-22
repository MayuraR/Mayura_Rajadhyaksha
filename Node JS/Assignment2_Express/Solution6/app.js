var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (request, response)=>{
    response.sendFile('/public/index.html', { root : __dirname});
});

console.log('hi');

app.listen('3000');