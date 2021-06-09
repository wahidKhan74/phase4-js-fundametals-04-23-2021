// class expression
let Human = class {

    constructor(name,age,gender) {
        this.name= name;
        this.age= age;
        this.gender= gender;
        this.calcRetirement = () =>{
            return 60-this.age;
        }
    }

    static showGender() {
        return "sample satm";
    }
    // get and sets methods
    get Name() {
       return this.name;
    }

    get Age(){
       return this.age;
    }

    set Name(name) {
        this.name= name;
    }
    set Age(age){
        this.age = age;
    }
}

let human = new Human("Mike Ross",40,'male');
console.log(human);

console.log(human.name);
console.log(human.age);
console.log("Years to retire " ,human.calcRetirement());
console.log("Name " ,human.Name);
console.log("Age " ,human.Age);
console.log("-------------");
human.Age=30;
human.Name="Will smith";
console.log("Name " ,human.Name);
console.log("Age " ,human.Age);

console.log("Static method " ,Human.showGender());



