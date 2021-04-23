// Javascript popup -> alert , confirm , prompt

function showMessage() {
    // alert consist of a meessage along with ok button
    alert("Hello, Welcome to javascript !");
}

function showMessage2() {
    // confirm consist of a meessage along with ok button & cancel button
    confirm("Hello, Welcome to javascript !");
}

function showMessage3() {
    // prompt consist of a meessage along with ok button & cancel button + input filed to collect data from user
    var response   = prompt("Hello, Welcome to javascript !");
    console.log(response);
    
}