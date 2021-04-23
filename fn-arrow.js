// function decleration
function showMessage() {
    console.log("Hello , Welcome to JavaScript !");
}

// function expression
var showMessage2 = function () {
    console.log("Hi , Welcome to JavaScript !");
}

// arrow function expression
var showMessage3 =  () => {
    console.log("Hola , Welcome to JavaScript !");
}

// one linner arrow func
var showMessage4 =  (name,age) => console.log(` Hello ${name} your age is ${age}`);

// arrow function with return  
var greetUser =  (name) => {
    return ` Hello ${name} `;
}

// one linner arrow function with return 
var sayHiStranger = ()=> ' Hi , stranger.';

// showMessage();
// showMessage2();
// showMessage3();
// showMessage4("Mike",30);

var respone = greetUser("John Smith");
console.log(respone);


var respone2 = sayHiStranger();
console.log(respone2);

