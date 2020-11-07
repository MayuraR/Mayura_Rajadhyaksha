function getResult(){
    var str = document.getElementById("str").value;
    var a = str.split(",");
    var arr = a.map(Number);
    
    var result = mergeSort(arr);

    function mergeSort (arr) {
        if (arr.length < 2) {
        return arr;
        }
        var mid = Math.floor(arr.length / 2);
        var left = mergeSort(arr.slice(0, mid));
        var right = mergeSort(arr.slice(mid));
        return merge(left, right);
        }
        
        function merge (sub1, sub2) {
        var result = [];
        while (sub1.length > 0 && sub2.length > 0)
        result.push(sub1[0] < sub2[0]? sub1.shift() : sub2.shift());
        return result.concat(sub1.length? sub1 : sub2);
        }

    document.getElementById("message").innerHTML = "The sorted array is "+ result;
}