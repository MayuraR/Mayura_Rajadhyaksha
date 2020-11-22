let fs = require('fs');
let sum ;

fs.readFile('Solution8.txt', 'utf8', function(err, data) {

   let arr = data.split(' ').map(parseFloat);

   console.log( arr.reduce((a, b) => {

    return a+b;
    
}));

});


 

