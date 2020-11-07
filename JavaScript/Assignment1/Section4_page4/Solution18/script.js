function getResult(){
    var str = document.getElementById("num").value;
    var arr1 = str.split(",");
    var arr = new Array(arr1.length);
    str = "";
    
    for(var i =0; i<arr1.length; i++){
        arr[i] = parseFloat(arr1[i]);
    }
    
    var n = 0; 

    for(var i = 0; i<arr.length; i++){
        if(n<=20){
            if(Math.sqrt(arr[i]) == Math.floor(Math.sqrt(arr[i]))){
                str = str + " "+arr[i]+ ", ";
                n++;
            }
        }
    }
    document.getElementById("message").innerHTML = "The list of perfect square roots are "+ str;
}