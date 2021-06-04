//var : var keyword has function level scope
// let : let keyword has block level scope
// const : const keyword has block level scope

function display(){

    var flage = true;
    //if block
    if(flage) {
        var itemOne = "Nike Shoes";
        let itemTwo = "Iphone 11";
        const itemThree = "One Plus Nord";

        itemTwo = "Iphone 12 pro";
        // itemThree ="One Plus 8"; // TypeError: Assignment to constant variable.

        console.log(itemOne);
        console.log(itemTwo);
        console.log(itemThree);
    }
    console.log('----------------');
    console.log(itemOne);
    // console.log(itemTwo); // Reference Error not defined
    // console.log(itemThree);  // Reference Error not defined
    
}

display();