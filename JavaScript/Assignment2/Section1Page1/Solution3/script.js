function getResult(){
    var str = document.getElementById("str").value;
    var arr = str.split(",");
    document.getElementById("message").innerHTML = find(arr, isEven);
}
    
    
function find(array, test) {
    for(var i=0; i<array.length; i++) {
      if(test(array[i])) {
        return(array[i]);
      }
    }
  }
  
  function isEven(num) { 
    return(num%2 == 0); 
  }
  
    
     