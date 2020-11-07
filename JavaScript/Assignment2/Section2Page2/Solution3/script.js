function getResult(){
    var x = document.getElementById("str").value;

    document.getElementById("message"). innerHTML = "square is " + (function(x) { return x*x; })(x) ;
}