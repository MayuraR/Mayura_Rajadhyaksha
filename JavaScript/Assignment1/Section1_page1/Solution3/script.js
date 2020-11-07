function FlipCoin(){
    if(Math.random()<0.5){
        return (1);
    }else{
        return (0);
    }
}

function numberOfHeads(){
    var flips = parseInt(document.getElementById("flipNumber").value);
    var totalHeads =0;
    for(var i =1; i<=flips; i++){
        var result = FlipCoin();
        if(result==1){
            totalHeads++;
        }
    }
    document.getElementById("message").innerHTML = "The total number of heads is: "+totalHeads;
}