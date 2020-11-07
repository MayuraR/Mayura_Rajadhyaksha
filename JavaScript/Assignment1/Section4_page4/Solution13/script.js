function getResult(){
    var arr = document.getElementById("str").value.split(",");
    var x = document.getElementById("find").value;

    for(var i = 0; i<arr.length; i++){
        if(arr[i] === x){
            document.getElementById("message").innerHTML = "Element found";
            break;
        }
        else if(i == arr.length-1){
            document.getElementById("message").innerHTML = "Element not found";
        }
    }
}