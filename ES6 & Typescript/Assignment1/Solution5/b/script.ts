function userFriends(name, ...friends){
    console.log(` Hi my name is ${name}`);
    console.log(`my friends are ${friends.join(", ")}`);
}

userFriends('Tom' , 'Jerry', 'Spike', 'Scooby');