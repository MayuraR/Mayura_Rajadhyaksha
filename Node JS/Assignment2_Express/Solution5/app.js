const { urlencoded } = require('body-parser');
const bodyparser = require('body-parser');
const express = require("express");
const path = require('path');
const app = express();

// Body-parser middleware 
var urlencodeParser = bodyparser.urlencoded({extended:false});
app.use(express.json());

//console.log('hi');
   
app.get("/form", function(req, res){ 
    res.render(path.join(__dirname+'/index.ejs'));
}); 
   
app.post("/path", urlencodeParser, (req, res) => { 
    //console.log(req.body.str.split('').reverse().join('')) ;
    res.end(req.body.str.split('').reverse().join('')) ;
    
});
   
app.listen('3000');