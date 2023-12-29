/*
    GETTER:
        > give the value of property
        > give method as property

    SETTER:
        > set the new value of object (property)

*/
class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    // // getter 

    // fullName(){
    //     return `${this.fname} ${this.lname}`
    // }
    get fullName(){
        return `${this.fname} ${this.lname}`
    }

    // // // setter
    // setName(fname, lname){
    //     this.fname = fname;
    //     this.lname = lname;
    // }


    set fullName(name){
        const [fname, lname] = name.split(" ");
        this.fname = fname;
        this.lname = lname;
    }
}

const p = new Person("prince", "Sunsara", 21)

// // // getter
// // console.log(p.fullName()) // here we are calling the method but for getter
// console.log(p.fullName) // here we are using method as property as use of get keyword


// // // setter
// // console.log(p.fname)
// // console.log(p.lname)
// console.log(p.fullName)

// p.setName("Shiv", "Parvati")
// // console.log(p.fname)
// // console.log(p.lname)
// console.log(p.fullName)



console.log(p.fullName);

p.fullName = "Raj Rajeshwari";
console.log(p.fullName);
