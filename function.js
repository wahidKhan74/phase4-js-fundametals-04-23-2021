//function decleartion
function functionName() {
    // function body
}

// zero parameter function
function showMessage() {
    console.log("Hello, Welcome to 'Javascript' !");
}

// on parameter function
function greeting(name) {
    console.log('Today is a "wonderfull day" !, ',name);
}

// muti param function
function fetchContent(name,age,gender){
    // template string or expression
    var response = `Hello , user ${name}, you have age ${age} , with gender ${gender}.`;
    console.log(response);
}

// default parametrised function
function contact(name="user",phone="90909090"){
    console.log(`Hi, ${name} you can contact us on ${phone}`);
}

//function call
showMessage();
greeting("John Smith");
// greeting(10001);
greeting();

fetchContent("John",29,"male");
// fetchContent();

contact(); // -> it will take default paramter value
contact("John Smith",3030303030)