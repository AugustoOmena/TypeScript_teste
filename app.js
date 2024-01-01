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
const newAccount = new Account('Nath', 1);
console.log(newAccount);
const account = new Account('Joao', 2);
console.log(newAccount);
