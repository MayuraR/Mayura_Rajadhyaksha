let total : number = 0;
class Account{
    constructor( public id: number, public customerName: string, public balance: number){
        
    }
    findBalance(){
        return (this.balance) ;
    }

    totalBalance(public balance: number){
        total+=balance;
    }

    displayTotalbalance(){
        console.log(`The total balance is ${total}`);
    }

}

class SavingsAccount extends Account{
    constructor( public id: number, public customerName: string, public balance: number, public intrest: number){
        super(id, name, balance);
        this.intrest = intrest;
        super.totalBalance(this.balance);
    }
}

class CurrentAccount extends Account{
    constructor(public id: number, public customerName: string, public balance: number, public cashCredit: number){
        super(id, name, balance);
        this.cashCredit = cashCredit;
        super.totalBalance(this.balance);
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

c1.displayTotalbalance();
