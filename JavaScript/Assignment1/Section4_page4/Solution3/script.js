function getResult(){
    var name = document.getElementById("name").value;

    if(name === "Alice" || name === "Bob"){
        document.getElementById("message").innerHTML = "Hello "+ name;  
    }else{
        document.getElementById("message").innerHTML = "Doest match";  
    }
}