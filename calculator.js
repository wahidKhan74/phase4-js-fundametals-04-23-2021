// //arithmatic calculator : without callback
// function calculator(num1,num2,calcType){
//     if(calcType ==="add"){
//         return num1+num2;
//     } else if(calcType ==="sub"){
//         return num1-num2;
//     } else if(calcType ==="mul"){
//         return num1*num2;
//     } else if(calcType ==="div"){
//         return num1/num2;
//     }
// }
let add = function(num1,num2) {
    return num1+num2;
}

let sub = function(num1,num2) {
    return num1-num2;
}

let mul = function(num1,num2) {
    return num1*num2;
}

let div = function(num1,num2) {
    return num1/num2;
}

let avg = function(num1,num2) {
    return (num1+num2)/2;
}
//arithmatic calculator : with callback
function calculator(num1,num2, callback){
    return callback(num1,num2);
}

let x = 1000;
let y = 200;
var response  = calculator(x,y,add);
console.log(`Addition ${x} + ${y}: ${response}`);


var response  = calculator(x,y,sub);
console.log(`Substraction ${x} - ${y} : ${response}`);

var response  = calculator(x,y,mul);
console.log(`Multiplication ${x} * ${y} : ${response}`);

var response  = calculator(x,y,div);
console.log(`Division ${x} / ${y} : ${response}`);

var response  = calculator(x,y,avg);
console.log(`Average ${x} & ${y} : ${response}`);