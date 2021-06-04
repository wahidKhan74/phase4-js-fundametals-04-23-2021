// account constructor
function Account(id,username,balance,email) {
    this.id = id;
    this.username= username;
    this.balance= balance;
    this.email= email;
}

// add new properties in prototype
Account.prototype.city ="New York";
Account.prototype.state ="US";

// add function within prototype
Account.prototype.showBalance = function showBalance(){
    console.log("The Balance :", this.balance)
}

Account.prototype.deposit = function deposit(amount){
    this.balance += amount;
    console.log("The Balance :", this.balance)
}


let account1 = new Account(1000,"John Doe",876723,'john.doe@gmail.com');
// account1.city="New York";
// account1.state="US";
console.log(account1);
console.log("-----------------");
console.log("User name : ",account1.username);
console.log("User city : ",account1.city);
account1.showBalance();
account1.deposit(1000);



let account2 = new Account(1001,"Mike Doe",977723,'mike.doe@gmail.com');
console.log(account2);
console.log("-----------------");
console.log("User name : ",account2.username);
console.log("User city : ",account2.city);
account2.showBalance();
account1.deposit(1000);