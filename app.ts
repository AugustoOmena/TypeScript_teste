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

const newAccount: Account = new Account('Nath', 1)
console.log(newAccount)

const account: Account = new Account('Joao', 2)
console.log(newAccount)