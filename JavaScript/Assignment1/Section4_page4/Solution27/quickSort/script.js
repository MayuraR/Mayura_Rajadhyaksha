function getResult(){
    var str = document.getElementById("str").value;
    var a = str.split(",");
    var arr = a.map(Number);
    var sortedArray = quickSort(arr);

    function quickSort(arr) {
        if (arr.length <= 1) { 
            return arr;
        } else {
    
            var l= [];
            var r = [];
            var newArray = [];
            var pivot = arr.pop();
    
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] <= pivot) {
                    l.push(arr[i]);
                } else {
                    r.push(arr[i]);
                }
            }
    
            return newArray.concat(quickSort(l), pivot, quickSort(r));
        }
    }
    document.getElementById("message").innerHTML = "The sorted array is "+ sortedArray;
}