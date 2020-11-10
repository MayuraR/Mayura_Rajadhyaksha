
  let previousNumber = Symbol('previous');
  let currentNumber = Symbol('curren');

  class Fibonacci{

    constructor(){
      this[previousNumber]=0;
      this[currentNumber]=1;
    }

    next(n){
      let nextNumber;

    //   console.log(this[previousNumber]);
    //   console.log(this[currentNumber]);

      for(let i=0; i<n; i++){        

        nextNumber = this[previousNumber]+this[currentNumber;
        this[previousNumber]=this[currentNumber];
        this[currentNumber] = nextNumber;
      }
      return nextNumber;
    }
  };
  let f=new Fibonacci();
  console.log("The next number is: "+f.next(5));