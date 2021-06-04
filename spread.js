// spread  operator -> (...)

let numbers =[100,200,300,400,500];

function calculateTotal(numbers){
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
           total +=numbers[index] ;   
    }
    return total;
}
let response = calculateTotal(numbers);
console.log("Result : "+response);

function sum(x,y,z,p,q) {
    return x+y+z+p+q;
}
let result = sum(...numbers);
console.log("Result : "+result);
