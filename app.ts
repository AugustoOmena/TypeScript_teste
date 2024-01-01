class User {
    name: string = 'Augusto'
    age: number = 20

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('A', 20)
user.showName()

const otheruser = new User('B', 35)
user.showName()