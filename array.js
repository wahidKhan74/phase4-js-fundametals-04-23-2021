let items = ["Apple","Orange",100,20.123,true,{id:1001,name:"Iphone 12 pro"}];

console.log(items);

console.log(items[0]);
console.log(items[5]);
console.log(items[6]);

// array operations -> array utility / helper methods

// push : add / append element at the end of the array
items.push("Nike Shoes");

// unshift : add element at the start of the array
items.unshift("Mr.");

// pop : remove element at the end of the array
items.pop();

// shift : remove element at the start of the array
items.shift();

// replace : replace elemnt at a index
items.splice(2,1,"new 100");

// insert : replace elemnt at a index
items.splice(2,0,2000.2323);

// TODO :: find , forEach , map ,filter.