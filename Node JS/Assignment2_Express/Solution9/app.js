let express = require('express');
let fs = require('fs');
let process = require('process');
let app = express();

let object;

let arr = process.argv;
console.log(arr);

fs.readFile(arr[3], (err, data) => {
    if (err) {
        console.log('Error : '+err);
    }
    else{
    // object = JSON.parse('{"result":true, "count":42}');
    // console.log(object.result);
    object = JSON.parse(data);
    //console.log(object.city);
    }
});

app.get('/books' ,(request, response) => {
    response.json(object);
});

app.listen(arr[2]);