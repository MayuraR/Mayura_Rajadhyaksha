function getResult(){
    
    var n = document.getElementById("str2").value;
    var str = document.getElementById("str1").value;
    var a = str.split(",");

    var arr = a.map(Number);
    var num = parseInt(n);
    var result = binarySearch();

    if(result == true){
        document.getElementById("message").innerHTML = num+ " is found";
    }
    else{
        document.getElementById("message").innerHTML = num+ " is not found";
    }


    function binarySearch(){
        var l = 0;
        var r = arr.length-1; 
            
        while (l<= r){ 
    
            var m=Math.floor((l + r)/2); 
    
            if (arr[m]===num){
                return true; 
            } 
    
            else if (arr[m] < num)  
                {
                    l = m + 1; 
                }
            else
                {
                    r = m - 1; 
                }
        } 
    
        return false;
    } 
    
   
}