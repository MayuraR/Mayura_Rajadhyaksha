"use strict";
function printCapitalNames(a, b, c, d, e) {
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var x = arguments_1[_i];
        console.log(x.toUpperCase());
    }
}
var arr = ['tom', 'jerry', 'spike', 'scooby', 'oswarld'];
printCapitalNames.apply(void 0, arr);
