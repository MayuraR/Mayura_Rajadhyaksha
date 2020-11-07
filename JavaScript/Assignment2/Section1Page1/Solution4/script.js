function getResult(){
    var str = document.getElementById("str").value;
    var arr = str.split(",");

    document.getElementById("message").innerHTML = map(arr , Math.sqrt) + "<br>" + map(arr, square);
}
function map(arr, func) {
  var result = new Array();
  for(var i=0; i<arr.length; i++) {
    result.push(func(arr[i]));
  }
  return(result);
}

function square(a){
    return(a*a);
}