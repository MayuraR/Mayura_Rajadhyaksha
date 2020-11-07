function getResult(){
    var n = document.getElementById("num1").value ;
    var arr = [];
    console.log(n.length);

    for (var i = 0; i < n.length; i ++) { 
        
        arr.push(n.charAt(i)); 
    } 

    console.log(arr.map(Number));
}