class Bank {
    constructor(name) {
        this.name = name;
    }
    getName(){
        console.log(`The Bank ${this.name}`);
    }
}

class America extends Bank {
    constructor(name) {
        super(name);
    }

    getName(){
        console.log(`The American Bank ${this.name}`);
    }
}

class India extends Bank {
    constructor(name) {
        super(name);
    }

    getName(){
        console.log(`The Indian Bank ${this.name}`);
    }
}

class Japan extends Bank {
    constructor(name) {
        super(name);
    }
    getName(){
        console.log(`The Japanese Bank ${this.name}`);
    }
}

let america = new America("XYZ Bank");
america.getName();


let india = new India("HDFC Bank");
india.getName();

let japan = new Japan("@#*$^&$ Bank");
japan.getName();