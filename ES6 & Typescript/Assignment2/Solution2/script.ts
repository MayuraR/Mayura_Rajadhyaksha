let count = -1;

function getArmstrong(){    

    return {
        next : function(){
            count++;
            return returnArmstrong(count++);;
            
        } 

    }
}

function returnArmstrong(num) {
    let noOfDigits;
    let remainder;
    for(let i = num ; i<1000 ;i++){
    noOfDigits = i.toString().length;
    let temp = i;
    let sum = 0;
    while (temp > 0) {
   
    remainder = temp % 10;

    sum += remainder **  noOfDigits;

    temp = Math.floor(temp / 10); 
}

    if ( sum === i) {
        count = sum; 
        return i
    }
}
}
let myArmstrong = getArmstrong();
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









