function getResult(){
    var str = document.getElementById("str").value;
    var a = str.split(",");

    var arr = a.map(Number);

    for(var i = 0; i<arr.length; i++)
    {
        for(var j = i; j<arr.length; j++)
        {
            if(arr[i]>arr[j]){
                var temp =arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    
    document.getElementById("message").innerHTML = "The sorted list is "+arr;
}