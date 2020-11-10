function printCapitalNames(a, b, c, d, e){
    for (let x of arguments){
        console.log(x.toUpperCase());
    }

}

const arr = ['tom', 'jerry', 'spike', 'scooby', 'oswarld'];
printCapitalNames(...arr);