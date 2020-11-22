let fs = require('fs');

fs.readFile('Solution11.txt', 'utf8', function(err, data) {

    if (err) throw err; 

    console.log(data);
});


 

