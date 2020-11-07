function calculation(){
    var a = parseFloat(document.getElementById("number1").value);
    var b = parseFloat(document.getElementById("number2").value);
    var c = parseFloat(document.getElementById("number3").value);

    var calc = (a + b)/c;

    document.getElementById("message").innerHTML = calc;
}