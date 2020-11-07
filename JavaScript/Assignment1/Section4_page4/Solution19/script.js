function getResult(){
    var arr1 = document.getElementById("str1").value.split(",");
    var arr2 = document.getElementById("str2").value.split(",");
    var result = [];

    for(var i = 0; i<arr1.length; i++)
    {
        result.push(arr1[i]);
    }
    for(var i = 0; i<arr2.length; i++)
    {
        result.push(arr2[i]);
    }

    document.getElementById("message").innerHTML = result;
}