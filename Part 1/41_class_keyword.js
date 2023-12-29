/*
    CLASS KEYWORD
        > when you create class instance with new keyword constructor automatically get called
*/

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;   
//     return user;
// }
// createUser.prototype.sing = () =>{
//     return "I am singing"
// }
// const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
// console.log(u1);
// console.log(u1.sing())

// // // Let's do it with class
// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         console.log("Constructor called.");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }    
//     sing(){
//         return "I am singing"
//     }
// }    

// const u1 = new CreateUser('prince','sunsara','prince@gmail.com',21,'patan');
// // console.log(u1.firstName);
// console.log(Object.getPrototypeOf(u1)) // {}


// // EXAMPLE
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

const a = new Animal('tom',2)
console.log(a);
console.log(a.eat())
console.log(a.isCute())
console.log(a.isSuperCute())