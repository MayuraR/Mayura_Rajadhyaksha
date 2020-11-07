function longestToken(){
    var str = document.getElementById("longestString").value;
    var arr = str.split("ab");
    var longest = "";
    console.log(arr);
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i].indexOf("a")==-1 && arr[i].indexOf("b")){
            if(arr[i].length > longest.length)
            {
                longest = arr[i];
            }
        }else{
            continue;
        }
    }
    document.getElementById("message").innerHTML = longest;
}