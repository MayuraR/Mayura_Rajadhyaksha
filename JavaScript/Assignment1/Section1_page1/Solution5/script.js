function getResult(){
    var num = document.getElementById("num").value;
    var char = document.getElementById("char").value ;

    var result = "";
    for(var i=0; i<num; i++) {
        result = result.concat(char);
    }

    document.getElementById("message").innerHTML = result;
      
}