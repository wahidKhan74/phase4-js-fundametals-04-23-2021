//declerative class syntax
class Account {

    constructor(id,name,email,balance) {
        //itialization
        this.id= id;
        this.name= name;
        this.email = email;
        this.balance= balance;
        this.displayName = function() {
            return this.name;
        }
    }

    showBlance(){
        console.log(`Hello user ${this.name}, you have balance ${this.balance}`);
    }

    deposit(amount) {
        this.balance += amount;
    }

}

let account = new Account(10011,"John Deo",'john.doe@gmail.com',988773);
console.log(account);

console.log(account.id);
console.log(account.name);
console.log(account.displayName());
account.showBlance();
account.deposit(10000);
account.showBlance();
