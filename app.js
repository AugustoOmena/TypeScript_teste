"use strict";
class Account {
    constructor(name, accountNumber) {
        this.deposit = () => {
            console.log('Voce depositou');
        };
        this.withdraw = () => {
            console.log('Voce sacou');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
class Admin {
    constructor() {
        this.getBalance = () => {
            console.log(this.balance);
        };
        this.balance = 20;
    }
}
const adminAccount = new Admin();
console.log(adminAccount);
const account = new Account('Joao', 2);
console.log(Account);
