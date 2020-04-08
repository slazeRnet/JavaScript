class Bank {
    #bankName;
    #transactions;
    constructor(bankName) {
        this.#bankName = bankName;
        this.#transactions = {};
        this.allCustomers = [];
    }

    set bankName(bankName) {
        this.#bankName = bankName;
      }
    set transactions(transactions) {
        this.#transactions = transactions;
      }
    get transactions() {
        return this.#transactions 
      }

    #makeTransaction(firstName, lastname, type, ammount) {
        let key = `${firstName} ${lastname}`;
        let value = {type ,ammount};
        if(Object.keys(this.#transactions).filter(k => {
            k !== key;
            this.#transactions[key] = [];
        }))
        this.#transactions[key].push(value);
      }

    newCustomer(customer) {
        
        let { firstName, lastName, personalId } = customer;
        if (!this.allCustomers.filter(c => c.firstName === firstName && c.lastName === lastName)) {

            throw new Error(`${firstName} ${lastName} is already our customer!`);

        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, ammount){
        function makeTransaction(firstName, lastname, type, ammount) {
            let key = `${firstName} ${lastname}`;
            let value = {type ,ammount};
            if(Object.keys(this.#transactions).filter(k => {
                k !== key;
                this.#transactions[key] = [];
            }))
            this.#transactions[key].push(value);
          }
        if(!this.allCustomers.filter(c => c.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
        }

        var result = this.allCustomers.filter(obj => {
            return obj.personalId === personalId
          });

          if(!result.totalMoney ){
            result.totalMoney = 0;
          }
          result.totalMoney += ammount;
          makeTransaction(result.firstName, result.lastName, 'deposit', ammount);
          return result.totalMoney + '$';

    }
    
    withdrawMoney(personalId, ammount){
        function makeTransaction(firstName, lastname, type, ammount) {
            let key = `${firstName} ${lastname}`;
            let value = {type ,ammount};
            if(Object.keys(this.#transactions).filter(k => {
                k !== key;
                this.#transactions[key] = [];
            }))
            this.#transactions[key].push(value);
          }
        if(!this.allCustomers.filter(c => c.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
        }
        
        if(!this.allCustomers.find(c => c.personalId === personalId &&
            c.totalMoney < ammount)){
                let customer = allCustomers.filter(c => c.personalId === personalId);
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        var result = this.allCustomers.filter(obj => {
            return obj.personalId === personalId
          });

          result.totalMoney -= ammount;
          makeTransaction(result.firstName, result.lastName, 'withdraw', ammount);
          return result.totalMoney + '$';

    }

    customerInfo(personalId){
        if(!this.allCustomers.filter(c => c.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
        }
        let customer = this.allCustomers.find(c => {
            c.personalId === personalId;
        })
        let customerFullName = `${customer.firstName} ${customer.lastName}`;
        let output;
        output += `Bank name: ${this.#bankName}\n`
         output += `Customer name: ${customer.firstName} ${customer.lastName}\n`
         output += `Customer ID: ${customer.personalId}\n`
         output += `Total Money: ${customer.totalMoney}$\n`
         output += `Transactions:`
         let transactionsArray = [];
         if(customerFullName in this.#transactions){
             for (const entry of Object.values(this.#transactions[customerFullName])) {
                 if(entry.type = 'withdraw'){
                     transactionsArray.push[customerFullName, ` withdrew `, entry.ammount];
                     
                    }
                    else{
                        transactionsArray.push[customerFullName, ` made depostit of `, entry.ammount];

                 }
                }
            }
            transactionsArray.sort((a, b) => {
                return a.ammount - b.ammount;
            })

            for (const key in transactionsArray) {
                
                output += `\n${key}. ${transactionsArray[key][0]} ${transactionsArray[key][1]} ${transactionsArray[key][2]}$!`;
            }


    }

}
let bank = new Bank(`SoftUni Bank`);
console.log(bank.bankName);

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
