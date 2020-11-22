const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('', name=> {
    console.log(`Hello ${name}`);
    readline.close();
  });