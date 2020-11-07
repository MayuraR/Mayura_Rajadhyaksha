function getResult(){
var str = document.getElementById("str").value;
var arr = str.split(",");;
var result = totalLength(arr);


function totalLength(arr) {
  return(arr.filter(noQ).map(stringLength).reduce(add));
  }

function stringLength(str) {
  return(str.length);
  }
  
function noQ(s) {
  return(s.indexOf("q") == -1);
}
  
function add(a, b) { 
  return(a + b); 
  }

  document.getElementById("message").innerHTML = result;
}