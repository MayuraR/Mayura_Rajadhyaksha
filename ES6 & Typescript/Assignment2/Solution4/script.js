"use strict";
//PLEASE NOTE: THIS CODE WAS SUCESSFULLY EXECUTED IN SCRATCH JS BUT NOT HERE 
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//chatroom 1
var mySet1 = new Set();
mySet1.add('Tom').add('Jerry').add('Spike');
//chatroom2
var mySet2 = new Set();
mySet2.add('Meena').add('Beena').add('Teena');
//descustructing both sets by using spread operator
var arr1 = __spreadArrays(mySet1);
var a1 = arr1[0], a2 = arr1[1], a3 = arr1[2];
var arr2 = __spreadArrays(mySet2);
var b1 = arr2[0], b2 = arr2[1], b3 = arr2[2];
//setting maps for chats
var myMap1 = new Map();
myMap1.set(a1, 'This is Tom').set(a2, 'This is Jerry').set(a3, 'This is Spike');
var myMap2 = new Map();
myMap2.set(b1, 'This is Meena').set(b2, 'This is Beena').set(b3, 'This is Treena');
function listOfParticipants(Set1) {
    for (var _i = 0, Set1_1 = Set1; _i < Set1_1.length; _i++) {
        var x = Set1_1[_i];
        console.log(x);
    }
}
function chats(Map1) {
    for (var _i = 0, _a = Map1.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log(key + " -> " + value);
    }
}
console.log("List of participants in chatroom 1");
listOfParticipants(mySet1);
console.log("List of participants in chatroom 2");
listOfParticipants(mySet2);
console.log("Chats in chatroom1:");
chats(myMap1);
console.log("Chats in chatroom2:");
chats(myMap2);
