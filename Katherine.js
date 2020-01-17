const Person = require("./Person.js");

class Katherine extends Person{
    constructor(name, favoriteColor, age){
        super(name, favoriteColor);
        this.age = age;
    }
}
module.exports = Katherine;