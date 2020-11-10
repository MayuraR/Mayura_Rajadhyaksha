"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var total = 0;
var Account = /** @class */ (function () {
    function Account(id, customerName, balance) {
        this.id = id;
        this.customerName = customerName;
        this.balance = balance;
    }
    Account.prototype.findBalance = function () {
        return (this.balance);
    };
    Account.prototype.totalBalance = function (balance) {
        total += balance;
    };
    Account.prototype.displayTotalbalance = function () {
        console.log("The total balance is " + total);
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, customerName, balance, intrest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.id = id;
        _this.customerName = customerName;
        _this.balance = balance;
        _this.intrest = intrest;
        _this.intrest = intrest;
        _super.prototype.totalBalance.call(_this, _this.balance);
        return _this;
    }
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, customerName, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.id = id;
        _this.customerName = customerName;
        _this.balance = balance;
        _this.cashCredit = cashCredit;
        _this.cashCredit = cashCredit;
        _super.prototype.totalBalance.call(_this, _this.balance);
        return _this;
    }
    return CurrentAccount;
}(Account));
var s1 = new SavingsAccount(1234, 'Mayura', 10000, 10);
var s2 = new SavingsAccount(4567, 'Meena', 1000, 11);
var c1 = new CurrentAccount(1098, 'Yukta', 5000, 5);
var c2 = new CurrentAccount(151617, 'neena', 7000, 10);
console.log(s1.findBalance());
console.log(s2.findBalance());
console.log(c1.findBalance());
console.log(c2.findBalance());
c1.displayTotalbalance();
