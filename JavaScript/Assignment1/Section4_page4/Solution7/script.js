function getResult(){
    var num = document.getElementById("num").value;
    var str = "";
    var sub = "";

    for(var i = 1; i<13; i++){
        sub = num+ " * "+ i +" = "+num*i + "<br>" ;
        str = str.concat(sub);

    }

    document.getElementById("message").innerHTML = str;

}