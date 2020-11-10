"use strict";
function userFriends(name) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(" Hi my name is " + name);
    console.log("my friends are " + friends.join(", "));
}
userFriends('Tom', 'Jerry', 'Spike', 'Scooby');
