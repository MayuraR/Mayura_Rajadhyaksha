function getResult(){
    var str = document.getElementById("str").value;
    var arr = str.split(",");
    console.log(map(arr , square));
    document.getElementById("message").innerHTML = map(arr , Math.sqrt) + "<br>" + map(arr, square);
}


function map(array, func) {
  if (array.length == 0) {
    return(array);
  } else {
    return([func(array[0])].concat(map(array.slice(1), func)));
  }
}
  
function square(a){
    return(a*a);
}



