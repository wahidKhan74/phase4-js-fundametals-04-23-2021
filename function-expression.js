// In JS we can declare function intwo ways.
// 1. function decleration
// 2. function expression


showMessage();

// function decleration :- function decleration are hoisted
function showMessage() {
    console.log("Hello, Welcome to 'Javascript' !");
}

// you can nnot call a funxction expression based function befor the definition.
// greeting();

// function expression : function expression is not hoisted
var greeting = function() {
    console.log("Hi, user to 'Javascript' !");
}

// function body
console.log(greeting);
greeting();