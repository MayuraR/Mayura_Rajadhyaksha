function getResult(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var l1 = a.split(",");
    var l2 = b.split(",");

    var arr = new Array(l1.length + l2.length);

    var n1 = 0;
    var n2 = 0;
    var n = 0;

    while(n< arr.length ){
        arr[n] = l1[n1];
        n1++;
        n++;
        arr[n] = l2[n2];
        n2++;
        n++;
    }
    document.getElementById("message").innerHTML = "The new array is: "+ arr;
}