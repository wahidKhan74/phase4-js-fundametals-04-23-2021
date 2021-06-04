let showName = function () {
    console.log("I am showName");
}

var displayName = function (a) {
    a();
}

displayName(showName);

displayName(function(){
    console.log("I am another sample callback");
});
