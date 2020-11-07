function getResult(){
    var arr = document.getElementById("str").value.split(",");
    var sum= 0;
    var prod = 1;

    for(var i = 0; i<arr.length; i++){
        sum+=parseInt(arr[i]);
        prod*=arr[i];

    }

    console.log("sum "+sum);
    console.log("product "+prod);
}