const moment = require('moment');

module.exports.displayDate = function(){
    return (moment().format('dddd, MMMM Do YYYY, h:mm:ss a '));
}

module.exports.sum = function(a, b){
    return `The sum of ${a} & ${b} is: ${a+b}`;
}

module.exports.multiplication = function(a, b){
    return `The multiplication of ${a} & ${b} is: ${a*b}`;
}