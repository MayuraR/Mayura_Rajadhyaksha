let count = -1;

function * getArmstrong(){

    let flag = 0;
    let i ;
    //using try catch to throw error
    try{
        while (flag == 0){
        
            i = returnArmstrong(++count);
            if(i < 1000){
                yield i;
            }
        else{
                flag = 1;
            throw 'Went over 1000';
            
        }
        }
    }
    catch(e){
        yield e;
    }

    //using resetArmstrong() to reset armstrong
    yield (resetArmstrong());

    yield (returnArmstrong(++count));
    yield (returnArmstrong(++count));

    //using resetArmstrong() to reset armstrong
    yield (resetArmstrong(++count));

}

function returnArmstrong(num) {

    for(let i = num ; i<1000 ;i++){
    
    let noOfDigits = i.toString().length;


    let temp = i;
    let sum = 0;
    while (temp > 0) {
   
    let remainder = temp % 10;

    sum += remainder ** noOfDigits;

    temp = Math.floor(temp / 10); 
}

    if ( sum === i) {
        count = sum; 
        return i
    }
}
}


function resetArmstrong(){
    count = 0;
    return returnArmstrong(count);
}

let armstrong = getArmstrong();


for(let j = 0; j<=17; j++){
console.log(armstrong.next().value);
}


