function getResult(){
    var a = document.getElementById("num").value;

    document.getElementById("message").innerHTML = composedValue(square, double, a);
}

function square(x) { 
    return(x*x); 
}

function double(x) { 
    return(x*2); 
}

function composedValue(f1, f2, val){
    return(f1(f2(val)));
}