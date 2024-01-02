export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome Alterado')
    }

    deposit = (): void => {
        if (this.validateStatus()){
            console.log('Voce depositou')
        }
    }

    getName = (): string => {
        return this.name
    }

    setAccountNumber = (): string => {
        return this.name
    }

    withdraw = (): void => {
        console.log('Voce sacou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    validateStatus = () => {
        if (this.status) {
            return this.status
        }

        throw new Error()
    }
}