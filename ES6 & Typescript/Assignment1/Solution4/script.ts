let arr = ["Tom", "Ivan", "Jerry"];

let arr2 = arr.map(a => ({name : a, length: a.length}));

console.log(arr2);