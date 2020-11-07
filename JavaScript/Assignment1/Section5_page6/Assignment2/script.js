var i =1;
var str = "";
var arr = new Array();

while (i <=3){

    var a = prompt("Please enter a number between 1 and 30");

    if(a >=1 && a<= 30 && isNaN(a) == false){
        i++;
        arr.push(a);
    }
    else{
        alert("Enter a valid Input");
    }
}
console.log(arr);

    for (var i =0; i<=3; i++){
        for(var j = 1; j<=arr[i]; j++){
            str = str.concat("*");
    }
    console.log(str);
    str = str.concat("<br>");
    }

    document.getElementById("message").innerHTML = str;

