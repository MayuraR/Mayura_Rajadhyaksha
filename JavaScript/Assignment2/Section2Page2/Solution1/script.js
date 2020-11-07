function getResult(){
    var str = document.getElementById("num1").value;
    var arr = str.split(",");

    document.getElementById("message").innerHTML = find(arr, isEven);
}

function find(arr, test) {
    if (arr.length == 0) {
      return("-1");
    } 
    
    else if (test(arr[0])) {
      return(arr[0]);
    } 
    
    else {
      return(find(arr.slice(1), test));
    }
}

function isEven(x){
    if (x%2 == 0){
        return true;
    }
}
  