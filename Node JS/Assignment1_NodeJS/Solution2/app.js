var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('The contents of test.txt are:');
    console.log(chunk);
});