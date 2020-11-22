let fs = require('fs');
let count = 0;

//find John from Solution5.txt
let findElement = 'John';


fs.readFile('Solution5.txt', 'utf8', function(err, data) {

    if (err) throw err; 
    let arr = data.split(' ');
    //  console.log(arr);
    arr.forEach(element => {
        if(element === findElement){
            count ++;
        }
    });

    console.log(count);
});


 

