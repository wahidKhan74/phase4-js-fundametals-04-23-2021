// Js nested function is a clouser function
var firstName = "John";   // global varaible

function fullName() {
    var lastName = "Smith" ;  // local variable of fullName()  => outter varaible
    
    // nested function or closures function
    function combine(){
         var middleName = "William" ;  // local variable of fullName()  => innner variable
         return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}
console.log(fullName());

// clouser is simple nested function which has access to three diffrenet scope chain
// 1. inner varaible 2. outer varaible 3. global varible.