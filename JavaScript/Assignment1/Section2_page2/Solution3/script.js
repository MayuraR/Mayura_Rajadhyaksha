function getResult(){
    var arr = document.getElementById("str").value.split(",");

    for(var i=0; i<arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
      }
    
      document.getElementById("message").innerHTML = arr;
}