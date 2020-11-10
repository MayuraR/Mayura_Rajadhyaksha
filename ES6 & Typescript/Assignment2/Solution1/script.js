"use strict";
var previousNumber = Symbol('previous');
var currentNumber = Symbol('curren');
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        this[previousNumber] = 0;
        this[currentNumber] = 1;
    }
    Fibonacci.prototype.next = function (n) {
        var nextNumber;
        //   console.log(this[previousNumber]);
        //   console.log(this[currentNumber]);
        for (var i = 0; i < n; i++) {
            nextNumber = this[previousNumber] + this[currentNumber];
            this[previousNumber] = this[currentNumber];
            this[currentNumber] = nextNumber;
        }
        return nextNumber;
    };
    return Fibonacci;
}());
;
var f = new Fibonacci();
console.log("The next number is: " + f.next(5));
