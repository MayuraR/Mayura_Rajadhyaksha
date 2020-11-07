function getResult(){
    var str = document.getElementById("num1").value;
    var k = parseInt(document.getElementById("num2").value)+1;

    var arr = str.split(",");

    var arr_slice_1 = arr.slice(0, k);
    
    var arr_slice_2 = arr.slice(k, arr.length);
    
    arr = arr_slice_2.concat(arr_slice_1);

    document.getElementById("message").innerHTML = arr;
}