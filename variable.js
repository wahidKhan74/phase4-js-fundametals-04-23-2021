// declare a varaible + initialize
var username  = "John Smith";  // => string type  
var price  = 102.20           // => number type
var flag = true              //  => boolean type
var firstName= null;        //  => null
// declare a varaible
var lastName;              //  => undefined

console.log(username);
console.log("username type " + typeof username);

console.log(price);
console.log("price type " + typeof price);

console.log(flag);
console.log("flag type " + typeof flag);

console.log(firstName);
console.log("firstName type " + typeof firstName);


console.log(lastName);
console.log("lastName type " + typeof lastName);


// no primitive type  -> object  -> js object , js array , js function 
// js object is collection of key & value pair 
var user = {
    id : 10001,
    name : "John Smith",
    gender : "male",
    ismarried : true
}

console.log(user);
console.log(user.name);

// ordered collection of non simillar or simillar type 
var names = ["John","Mike","William"];
var families = ["John", true, null, 2928, 230.20];

console.log(names);
console.log(families);

console.log(names[1]);
console.log(families[3]);





