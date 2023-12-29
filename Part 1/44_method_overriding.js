/*
    METHOD OVERRIDING
        > override the method of parent class
        > first check for base class object if there is any method exist then it call that method else it goes for parent class method
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
    eat(){
        return `Modified Eat : ${this.name} is eating`;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}

const d = new Dog('bob', 1, 43)
console.log(d.eat())