function getResult(){
    var str = document.getElementById("str").value;
    var arr = str.split(",");
    var str2 = "";
    for(var i =0; i<arr.length; i++){
        if(i%2 !== 0){
            str2 = str2.concat(" "+ arr[i])
        }
    }
    document.getElementById("message").innerHTML = str2;
}