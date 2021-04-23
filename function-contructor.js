// constructor : constructor is a special function which allows us to create dynamic object from same blueprint.
// Account Object Blueprint
function Account(id, name,balace,email){
    this.id  = id;
    this.name = name ;
    this.balace = balace;
    this.email = email;
} 

var account1 = new Account(1001,"John Doe",89743.23,"john.doe@gmail.com");

var account2 = new Account(1002,"Tony stark",1892743.23,"tony.stark@gmail.com");

console.log(account1);
console.log(account1.id);
console.log(account1.name);
console.log(account1.balace);
console.log(account1.email);
console.log(account2);
