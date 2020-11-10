"use strict";
var arr = ["Tom", "Ivan", "Jerry"];
var arr2 = arr.map(function (a) { return ({ name: a, length: a.length }); });
console.log(arr2);
