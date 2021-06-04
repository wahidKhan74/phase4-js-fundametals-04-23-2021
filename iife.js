// IIFE : Imediately invoked function expression -> self excuting anonymous function

( function (){
    console.log(" I am IIFE");
})();


(function(){
    var username= "John Smith";
    console.log(username);
    
    function display(name){
        console.log(" I  have user to display as ",name);
    }
    display(username);
})();