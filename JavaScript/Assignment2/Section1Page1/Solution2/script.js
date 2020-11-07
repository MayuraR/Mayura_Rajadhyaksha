function square(x) {
  return(x*x);
}
  
function double(x) {
  return(x*2);
}
  
function compose(f1, f2) {
  return(function(val) { return(f1(f2(val))); });
}
  
var f1 = compose(square, double);

var f2 = compose(double, square);


function getResult(){
  console.log("f1 for values 5 and 10");
  console.log(f1(5));
  console.log(f1(10));

  console.log("f2 for values 5 and 10");
  console.log(f2(5));
  console.log(f2(10));
  
}
  