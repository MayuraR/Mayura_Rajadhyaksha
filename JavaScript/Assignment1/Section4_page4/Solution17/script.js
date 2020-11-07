function getResult(){
    var str = document.getElementById("str").value;
    var arr1 = str.split(",");
    var arr = new Array(arr1.length);
    
    for(var i =0; i<arr1.length; i++){
        arr[i] = parseFloat(arr1[i]);
    }
    
    var sumFor = sumUsingFor();
    var sumWhile = sumUsingWhile();
    var sumReccursion = sumUsingReccursion(arr.length - 1);

    //For Loop
    function sumUsingFor(){
        var sum = 0;
        for(var i =0; i<arr.length; i++){
            sum+=arr[i];
        }
        return(sum);
    }

    // While Loop
    function sumUsingWhile(){
        var sum = 0;
        var n = arr.length -1;
        while(n>=0){
            sum+=arr[n];
            n--;
        }
        return(sum);
    }
    
    //recursion
    function sumUsingReccursion(len){
        if (len<0){
            return 0;
        }
        if(len == 0){
            console.log(0);
            return parseFloat(arr[0]);
        }
        else {
            console.log(len);
            return(sumUsingReccursion(len-1) + parseFloat(arr[len]));
        }

    }



    document.getElementById("message").innerHTML = "The sum of array elements using for, while and reccurssion respectively is "+sumFor + " "+sumWhile +" "+sumReccursion;
}