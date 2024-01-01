class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('Voce sacou')
    }
}

class Admin {
    balance: number

    constructor(){
        this.balance = 20
    }

    getBalance = () => {
        console.log(this.balance)
    }
}

const adminAccount: Admin = new Admin()
console.log(adminAccount)

const account: Account = new Account('Joao', 2)
console.log(Account)