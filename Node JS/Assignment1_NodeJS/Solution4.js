const fs = require("fs");
var writeStream = fs.createWriteStream("Solution4.txt");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter data', data => {
    writeStream.write(data);
    console.log('The file is saved!');
    readline.close();
  });