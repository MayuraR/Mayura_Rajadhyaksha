function getResult(){
    var a = parseFloat(document.getElementById("number1").value);
    var result = isEven(a);
    document.getElementById("message").innerHTML = "The result is: "+ result;
}
function isEven(a){
    if(a%2 == 0){
        return (true);
    }else{
        return(false);
    }
}