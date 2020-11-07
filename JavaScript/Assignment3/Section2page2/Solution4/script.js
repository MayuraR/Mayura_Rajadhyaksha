function getResult(){
    class BankAccount
    {   
        constructor(accountNumber, accountHolderName, accountBalance){
            this.accountNumber=accountNumber;
            this.accountHolderName=accountHolderName;
            this.accountBalance=accountBalance;
        }

        withdraw(amount){
            if(this.accountBalance - amount >0 || this.accountBalance - amount > this.odLimit){
                this.accountBalance = this.accountBalance - amount;
                console.log("Withdrawal successful");
            }else{
                console.log("Invalid Transaction");
            }
        }
        currentBalance(){
            return this.accountBalance;
        }
    }   
    
   var savings= new BankAccount( 1234, "Mayura", 10000);
   BankAccount.prototype.isSalary = 1000;

   var current = new BankAccount ( 4567, "Beena", 20000);
   BankAccount.prototype.odLimit = 100;

   console.log(savings);
   savings.withdraw(10000);
   console.log(savings.currentBalance());

   
    console.log(current);
    current.withdraw(100);
    console.log(current.currentBalance());
   
}