// class expression
let Person = class {

    constructor(name,age,gender) {
        this.name= name;
        this.age= age;
        this.gender= gender;
        this.calcRetirement = () =>{
            return 60-this.age;
        }
    }
    // get and sets methods
    getName() {
       return this.name;
    }

    getAge(){
       return this.age;
    }

    setName(name) {
        this.name= name;
    }
    setAge(age){
        this.age = age;
    }
}

let person = new Person("Mike Ross",40,'male');
console.log(person);

console.log(person.name);
console.log(person.age);
console.log("Years to retire " ,person.calcRetirement());
console.log("Name " ,person.getName());
console.log("Age " ,person.getAge());
console.log("-------------");
person.setAge(30);
person.setName("Will smith");
console.log("Name " ,person.getName());
console.log("Age " ,person.getAge());



