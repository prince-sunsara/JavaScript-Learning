/*
    SUPER KEYWORD
        > give property to parent class
        > call parent class constructor
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

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age)
        this.speed = speed
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}


const d = new Dog('bob', 1, 43)
console.log(d.run())