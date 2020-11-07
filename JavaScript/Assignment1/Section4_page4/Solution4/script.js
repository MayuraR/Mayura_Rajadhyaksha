function getResult(){
    var n = document.getElementById("num").value;

    var sum =0;

    for(var i =1; i<=n; i++){
        sum+=i;
        }
        
    document.getElementById("message").innerHTML = "The sum is "+sum;
}