function getResult(){
    var a = document.getElementById("str1").value;
    
    if(a === ""){
        alert("Textbox Empty");
    }

    else if(isNaN(a)){
        alert("Enter a number");
    }
    else{
        document.getElementById("message").innerHTML = (a-32)*5/9;
    }
}