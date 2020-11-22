var path = require('path');
var fs = require('fs');

const directoryPath = path.join(__dirname, 'Documents');


fs.readdir(__dirname, function (err, files) {
    
    files.forEach(function (file) {
        if(fs.lstatSync(path.resolve(__dirname, file)).isDirectory())
        {
            console.log('DIR:' + file);
        }
        else{
            console.log('FILE:' + file);
        }
    });
});