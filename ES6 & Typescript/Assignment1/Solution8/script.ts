class Account{
    constructor( id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    findBalance(){
        return (this.balance) ;
    }
}

class SavingsAccount extends Account{
    constructor(id, name, balance, intrest){
        super(id, name, balance);
        this.intrest = intrest ;
    }
}

class CurrentAccount extends Account{
    constructor(id, name, balance, cashCredit){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}


var s1 = new SavingsAccount(1234, 'Mayura', 10000, 10);
var s2 = new SavingsAccount(4567, 'Meena', 1000, 11);

var c1 = new CurrentAccount(1098, 'Yukta', 5000, 5);
var c2 = new CurrentAccount(151617, 'neena', 7000, 10);

console.log(s1.findBalance());
console.log(s2.findBalance());

console.log(c1.findBalance());
console.log(c2.findBalance());