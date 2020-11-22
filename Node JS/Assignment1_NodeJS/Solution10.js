const fs = require("fs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter data: ', data => {
    const name = `${data.split(' ')[0]}.txt`;     

    fs.writeFile(name, data, (err) => { 
        if (err) {
          console.log(err);  
        }
      });

    console.log('The file is saved!');
    readline.close();
  });