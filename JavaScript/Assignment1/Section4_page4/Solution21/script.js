function getResult(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = a.concat(",",b)

    var l1 = c.split(",");
    console.log(c);
    l1.sort(function(a, b){return a-b});
    
    document.getElementById("message").innerHTML = "The new array is: "+ l1;
}