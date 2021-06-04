// callback : callback is a function that is passed as an argument to another.

// function definition  -> fn expression
var x = function() {
    console.log(" I am called from another function.");
    return 100;  // return value is associated with a function call.
}

var y = function(callback) {
    console.log("I am processing function");
    // function calling -> callback
    callback();
}

// function  call.
y(x);