// default parameters
function display(name="John",age=30){
    console.log(`Hi user , ${name} you have an age ${age}`);
}

display();
display("Mike Jones",40);

console.log("---------------");

// rest parameters
function addition(...numbers) {
    console.log(numbers);
    
    let add = 0;
    for(let n of numbers) {
        add+=n;
    }
    return add;
}

let res1 = addition(100,200);
console.log("The Result 1 : ",res1);

let res2 = addition(100,200,300,400,500);
console.log("The Result 2 : ",res2);
