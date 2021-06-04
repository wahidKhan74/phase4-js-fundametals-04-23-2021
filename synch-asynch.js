console.log("Statement 1");
console.log("Statement 2");
console.log("Statement 3"); 
console.log("Statement 4");
console.log("Statement 5");

console.log("--------------");

console.log("Statement 1");
console.log("Statement 2");
//blocking code
var showData = function(){
    console.log("Statement 3"); 
};
setTimeout(showData,3000);
console.log("Statement 4");
console.log("Statement 5");