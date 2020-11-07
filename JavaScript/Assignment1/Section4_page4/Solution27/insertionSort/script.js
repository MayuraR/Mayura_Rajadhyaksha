function getResult(){
    var str = document.getElementById("str").value;
    var a = str.split(",");
    var arr = a.map(Number);

    for (var i = 1; i < arr.length; i++) {
            
        var current = arr[i];
        var j = i-1; 
        while ((j > -1) && (current < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;
    }
    document.getElementById("message").innerHTML = "The sorted array is "+ arr;
}