"use strict";
function printAll(obj1, obj2) {
    var i;
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        i = arguments_1[_i];
        //print(i);
        console.log(i);
    }
}
var circle = {
    radius: 5
};
var employee = {
    employeeName: 'beena'
};
printAll(circle, employee);
