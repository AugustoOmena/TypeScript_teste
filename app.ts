import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'


// const peopleaccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleaccount)
// peopleaccount.deposit()

const Companyaccount: CompanyAccount = new CompanyAccount('Gu', 4)
Companyaccount.deposit()
console.log(Companyaccount)