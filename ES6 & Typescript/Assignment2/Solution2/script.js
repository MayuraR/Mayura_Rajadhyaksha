"use strict";
var count = -1;
function getArmstrong() {
    return {
        next: function () {
            count++;
            return returnArmstrong(count++);
            ;
        }
    };
}
function returnArmstrong(num) {
    var noOfDigits;
    var remainder;
    for (var i = num; i < 1000; i++) {
        noOfDigits = i.toString().length;
        var temp = i;
        var sum = 0;
        while (temp > 0) {
            remainder = temp % 10;
            sum += Math.pow(remainder, noOfDigits);
            temp = Math.floor(temp / 10);
        }
        if (sum === i) {
            count = sum;
            return i;
        }
    }
}
var myArmstrong = getArmstrong();
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
console.log(myArmstrong.next());
