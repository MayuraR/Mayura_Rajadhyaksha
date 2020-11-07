function getResult(){
    var n1 = 0;
    var n2 = 1;
    var sum = 0;
    var arr = [];
    arr.push(n1, n2);

    for(var i =1 ; i<=100; i++){
        sum = n1+n2;
        arr.push(sum);
        n1 = n2;
        n2 = sum;
        
    }
    document.getElementById("message").innerHTML = arr;

}