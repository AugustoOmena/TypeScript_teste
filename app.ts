import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleaccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleaccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20)
companyAccount.deposit()