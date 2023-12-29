/*
    STATIC METHODS AND PROPERTIES:
        > normal method of class is access directoy by class instance
        > but some methods are directly related to that class which is called static method
        > you don't have to create class instance(object) for those class
        > only accessed through Class itself
*/

class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    static classInfo(){
        return `STATIC METHOD : This is classInfo method`
    }
    static desc = "STATIC PROPERTY : This is desc property"
    get fullName(){
        return `${this.fname} ${this.lname}`;
    }
    eat(){
        return `${this.fname} is eating`;
    }
}

const p = new Person("Prince", 'Sunsara')
console.log(p.fullName)


// static method
// p.classInfo() // donot access it like this : gives an error
console.log(Person.classInfo());
console.log(Person.desc);