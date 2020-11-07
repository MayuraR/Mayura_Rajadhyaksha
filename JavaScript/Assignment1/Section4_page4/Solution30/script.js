function getPigLatin(){
    var a = document.getElementById("str1").value;
    var arr = a.split(" ");
    var result = "";

    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i].toLowerCase();
        a = arr[i].slice(1, arr[i].length);
        var b = a.concat(arr[i].charAt(0), "ay");
        result = result.concat(b, " ");        
    }
    document.getElementById("message").innerHTML = result;

}



function getEnglish(){
    var a = document.getElementById("str1").value;
    var arr = a.split(" ");
    var result = "";

    for(var i = 0; i<arr.length; i++){
        a = arr[i].slice(0, arr[i].length-3);
        var b = arr[i].charAt(arr[i].length-3).concat(a);
        result = result.concat(b, " ");        
    }
    document.getElementById("message").innerHTML = result;

}