function getResult(){
    var str = document.getElementById("num1").value ;
    var base = document.getElementById("num2").value ;
    var target = document.getElementById("num3").value ;
    var n = str.split(",");
    var num ="";

    for(var i =0 ; i<n.length; i++){
        num = num.concat(n[i]);
    }
    
    n= parseInt(num);

    console.log(convert(num, base, target));

    function convert(num, base, target) {

        if (base >= 2 && target <= 36) {
                console.log("inside if");
                var result = parseInt(num, base).toString(target);
                // return result;
                return (Array.from(String(result), Number));

        }
        else{
            alert("Enter valid inputs");
        }
        
    }


    
    
}