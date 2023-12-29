/*
    CLASS KEYWORD
        > extends all the properties of parent class
*/
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

class Dog extends Animal{}

// const a = new Animal('tom',2)
// console.log(a);
// console.log(a.eat())
// console.log(a.isCute())
// console.log(a.isSuperCute())


const d = new Dog('bob', 1)
console.log(d);
console.log(d.eat())
console.log(d.isCute())
console.log(d.isSuperCute())