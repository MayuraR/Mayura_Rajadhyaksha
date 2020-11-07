function getResult(){
    var rolls = 1;
    while(Math.random() < 5/6) {
        rolls++;
    }
    
    document.getElementById("message").innerHTML = rolls;

}