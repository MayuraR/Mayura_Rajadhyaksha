

//PLEASE NOTE: THIS CODE WAS SUCESSFULLY EXECUTED IN SCRATCH JS BUT NOT HERE 

//chatroom 1
let mySet1 = new Set();
mySet1.add('Tom').add('Jerry').add('Spike');

//chatroom2
let mySet2 = new Set();
mySet2.add('Meena').add('Beena').add('Teena');

//descustructing both sets by using spread operator
const arr1 = [...mySet1];
const[a1, a2, a3]= arr1;

const arr2 = [...mySet2];
const[b1, b2, b3]= arr2;

//setting maps for chats

let myMap1 = new Map();
myMap1.set(a1, 'This is Tom').set(a2, 'This is Jerry').set(a3, 'This is Spike');

let myMap2 = new Map();
myMap2.set(b1, 'This is Meena').set(b2, 'This is Beena').set(b3, 'This is Treena');


function listOfParticipants(Set1){
    for(const x of Set1){
        console.log(x)
    }

}

function chats(Map1){
    for(let [key, value] of Map1.entries()){
        console.log(`${key} -> ${value}`);
    }
}

console.log(`List of participants in chatroom 1`);
listOfParticipants(mySet1);
console.log(`List of participants in chatroom 2`);
listOfParticipants(mySet2);

console.log(`Chats in chatroom1:`);
chats(myMap1);
console.log(`Chats in chatroom2:`);
chats(myMap2);